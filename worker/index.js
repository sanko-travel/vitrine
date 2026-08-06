const FROM = "Sanko <no-reply@withsanko.com>";
const TO = ["samir@withsanko.com", "melany@withsanko.com"];

function isBot({ website, number, newsletter }) {
  return website !== "" || number !== "sk-78x" || newsletter !== true;
}

function buildEmail(formType, data) {
  let subject;
  let rows;

  switch (formType) {
    case "lead-capture":
      subject = `[Sanko] Nouveau lead : ${data.handle}`;
      rows = [
        ["Handle", data.handle],
        ["Email", data.email],
      ];
      break;
    case "contact":
      subject = `[Sanko] Contact de ${data.email} (${data.type})`;
      rows = [
        ["Email", data.email],
        ["Profil", data.type],
      ];
      if (data.handle) rows.push(["Handle", data.handle]);
      if (data.marque) rows.push(["Marque", data.marque]);
      rows.push(["Message", data.message]);
      break;
    case "creer-mon-voyage":
      subject = `[Sanko] Nouveau créateur : ${data.social}`;
      rows = [
        ["Email", data.email],
        ["Réseau social", data.social],
        ["Message", data.message || "-"],
      ];
      break;
    default:
      subject = `[Sanko] Nouveau message`;
      rows = Object.entries(data).map(([k, v]) => [k, v]);
  }

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#025961;border-bottom:1px solid #e5e7eb;">${label}</td><td style="padding:8px 12px;color:#333;border-bottom:1px solid #e5e7eb;">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'DM Sans',Arial,sans-serif;background:#f9fafb;padding:40px 20px;">
  <div style="max-width:500px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#025961;padding:20px 24px;">
      <h1 style="margin:0;color:#fff;font-size:18px;">Sanko - ${escapeHtml(formType)}</h1>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;">
        ${tableRows}
      </table>
    </div>
  </div>
</body>
</html>`;

  return { subject, html, replyTo: data.email || null };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function verifyTurnstile(token, secret, ip) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    },
  );
  const data = await res.json();
  return data.success === true;
}

async function handleSendMail(request, env) {
  try {
    const body = await request.json();
    const { form: formType, data, website, number, newsletter } = body;
    const turnstileToken = body["cf-turnstile-response"];

    // Honeypot check - silent 200 for bots
    if (isBot({ website, number, newsletter })) {
      return Response.json({ success: true });
    }

    // Turnstile verification
    if (!turnstileToken) {
      return Response.json({ error: "Missing captcha" }, { status: 400 });
    }
    const ip = request.headers.get("CF-Connecting-IP");
    const valid = await verifyTurnstile(
      turnstileToken,
      env.TURNSTILE_SECRET_KEY,
      ip,
    );
    if (!valid) {
      return Response.json({ error: "Captcha failed" }, { status: 403 });
    }

    if (!formType || !data) {
      return Response.json({ error: "Missing form or data" }, { status: 400 });
    }

    const { subject, html, replyTo } = buildEmail(formType, data);

    const payload = { from: FROM, to: TO, subject, html };
    if (replyTo) payload.reply_to = replyTo;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend API error ${res.status}: ${err}`);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("send-mail error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/send-mail" && request.method === "POST") {
      return handleSendMail(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
