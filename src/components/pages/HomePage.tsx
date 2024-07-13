import ImageGallery from "@/components/ImageGallery";
import HeroSection from "@/components/HeroSection";
import FeatureVideo from "@/components/FeatureVideo";

import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <>
      <main>
        <h1>Welcome!</h1>
        <ImageGallery />
        <HeroSection />
        <FeatureVideo />
        <Link to="/join">Join here!</Link>
        <p><Link to="/supporters">Support RAS!</Link></p>
        <div>
          <h4>The IEEE Robotics & Automation Society at the University of Texas at Austin</h4>...inspires robotics research and aspires to make robotics more accessible to persons of all backgrounds. Since 1997, from our primary residence in UT&aposs Electrical and Computer Engineering department, we have connected undergraduate students from mechanical, electrical, aerospace, computer, and other engineering (and non-engineering) fields. We help students gain practical multi-disciplinary experience in the lab, then demonstrate our abilities at various robotics competitions while promoting robotics via community outreach. </div>
      </main>
    </>
  );
}