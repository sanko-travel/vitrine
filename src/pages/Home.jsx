import VideoHero from "../components/VideoHero";
import ValueProposition from "../components/ValueProposition";
import DestinationsGrid from "../components/DestinationsGrid";
import ManifestoTeaser from "../components/ManifestoTeaser";
import Testimonials from "../components/Testimonials";
import Guarantees from "../components/Guarantees";
import StatsBanner from "../components/StatsBanner";
import ProfileSelector from "../components/ProfileSelector";
import HomeFAQ from "../components/HomeFAQ";
import PressMentions from "../components/PressMentions";
import LeadCaptureForm from "../components/LeadCaptureForm";
import useHashScroll from "../hooks/useHashScroll";

export default function Home() {
  useHashScroll();
  return (
    <main>
      {/* dark (video) */}
      <VideoHero />
      {/* white */}
      <ValueProposition />
      {/* teal */}
      <DestinationsGrid />
      {/* white */}
      <ManifestoTeaser />
      {/* teal */}
      <Testimonials />
      {/* white */}
      <Guarantees />
      {/* teal */}
      <StatsBanner />
      {/* white */}
      <ProfileSelector />
      {/* teal */}
      <HomeFAQ />
      {/* white */}
      <PressMentions />
      {/* teal */}
      <LeadCaptureForm />
    </main>
  );
}
