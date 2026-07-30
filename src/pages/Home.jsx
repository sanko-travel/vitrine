import VideoHero from "../components/VideoHero";
import IntroBlock from "../components/IntroBlock";
import HowItWorks from "../components/HowItWorks";
import DestinationsGrid from "../components/DestinationsGrid";
import StatsBanner from "../components/StatsBanner";
import ProfileSelector from "../components/ProfileSelector";
import PartnersBanner from "../components/PartnersBanner";
import Testimonials from "../components/Testimonials";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function Home() {
  return (
    <main>
      {/* dark (video) */}
      <VideoHero />
      {/* light (beige) */}
      <IntroBlock />
      {/* dark (teal) */}
      <StatsBanner />
      {/* light (beige - scroll) */}
      <DestinationsGrid />
      {/* light (beige) */}
      <HowItWorks />
      {/* dark (teal) */}
      <ProfileSelector />
      {/* light (beige) */}
      <PartnersBanner />
      {/* light (gray-50) */}
      <Testimonials />
      {/* dark (teal) */}
      <LeadCaptureForm />
    </main>
  );
}
