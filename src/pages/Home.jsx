import VideoHero from "../components/VideoHero";
import IntroBlock from "../components/IntroBlock";
import DestinationsGrid from "../components/DestinationsGrid";
import StatsBanner from "../components/StatsBanner";
import HowItWorks from "../components/HowItWorks";
import TripsGallery from "../components/TripsGallery";
import PartnersBanner from "../components/PartnersBanner";
import Testimonials from "../components/Testimonials";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <IntroBlock />
      <DestinationsGrid />
      <StatsBanner />
      <HowItWorks />
      <div id="voyages">
        <TripsGallery />
      </div>
      <PartnersBanner />
      <Testimonials />
      <LeadCaptureForm />
    </main>
  );
}
