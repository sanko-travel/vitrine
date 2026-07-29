import VideoHero from "../components/VideoHero";
import IntroBlock from "../components/IntroBlock";
import DestinationsGrid from "../components/DestinationsGrid";
import StatsBanner from "../components/StatsBanner";
import ProfileSelector from "../components/ProfileSelector";

import PartnersBanner from "../components/PartnersBanner";
import Testimonials from "../components/Testimonials";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <IntroBlock />
      <StatsBanner />
      <DestinationsGrid />
      <ProfileSelector />

      <PartnersBanner />
      <Testimonials />
      <LeadCaptureForm />
    </main>
  );
}
