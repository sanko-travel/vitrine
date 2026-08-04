import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "voyages organisés" },
  { value: 2000, suffix: "+", label: "voyageurs" },
  { value: 14, suffix: "", label: "pays explorés" },
  { value: 98, suffix: "%", label: "de satisfaction" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate, showDivider }) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <div className="reveal scale-up flex items-center gap-1">
      <div className="flex flex-col items-center gap-1 flex-1">
        <span className="font-heading font-bold text-5xl md:text-6xl text-yellow">
          {count}
          {stat.suffix}
        </span>
        <span className="font-body text-white text-sm md:text-base tracking-wide uppercase whitespace-nowrap">
          {stat.label}
        </span>
      </div>
      {showDivider && (
        <div className="hidden md:block w-px h-16 bg-white/20 ml-auto" />
      )}
    </div>
  );
}

export default function StatsBanner() {
  const [animate, setAnimate] = useState(false);
  const countRef = useRef(null);
  const revealRef = useScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={(el) => { countRef.current = el; revealRef.current = el; }} className="bg-teal py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
            animate={animate}
            showDivider={i < stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
