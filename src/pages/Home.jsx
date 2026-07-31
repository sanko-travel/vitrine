import VideoHero from "../components/VideoHero";
import IntroBlock from "../components/IntroBlock";
import StatsBanner from "../components/StatsBanner";
import ConstructionMiroir from "../components/ConstructionMiroir";
import DestinationsGrid from "../components/DestinationsGrid";
import HowItWorks from "../components/HowItWorks";
import DifferencesSection from "../components/DifferencesSection";
import ProfileSelector from "../components/ProfileSelector";
import Testimonials from "../components/Testimonials";
import Guarantees from "../components/Guarantees";
import PartnersBanner from "../components/PartnersBanner";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function Home() {
  return (
    <main>
      {/* dark (video) */}
      <VideoHero />
      {/* beige */}
      <IntroBlock />
      {/* teal */}
      <StatsBanner />
      {/* beige */}
      <ConstructionMiroir />
      {/* teal */}
      <DestinationsGrid />
      {/* beige */}
      <HowItWorks />
      {/* teal */}
      <DifferencesSection />
      {/* beige */}
      <ProfileSelector />
      {/* teal */}
      <Testimonials />
      {/* white */}
      <Guarantees />
      {/* beige */}
      <PartnersBanner />
      {/* teal */}
      <LeadCaptureForm />
    </main>
  );
}
