import HeroSection from "@/components/HeroSection";
import FeatureVideo from "@/components/FeatureVideo";
import RasBot from "@/assets/RasBot_inverted.jpg";

import styles from "@/css/pages/HomePage.module.css";

import { Link } from "react-router-dom";

const strings = {
  ras_name: "The IEEE Robotics & Automation Society (RAS) at the University of Texas at Austin...",
  motto: "...inspires robotics research and aspires to make robotics more accessible to persons of all backgrounds. Since 1997, from our primary residence in UT's Electrical and Computer Engineering department, we have connected undergraduate students from mechanical, electrical, aerospace, computer, and other engineering (and non-engineering) fields. We help students gain practical multi-disciplinary experience in the lab, then demonstrate our abilities at various robotics competitions while promoting robotics via community outreach."
}

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgAndDescription}>
          <img src={RasBot} className={styles.img} />
          <div className={styles.mottoDiv}>
            <h4>{strings.ras_name}</h4>
            {strings.motto}
          </div>
        </div>

        <div className={styles.links}>
          <Link to="/join" className={styles.homeLink}>Join here!</Link>
          <Link to="/supporters" className={styles.homeLink}>Support RAS!</Link>
        </div>
        <FeatureVideo title={"Welcome to RAS!"} src={"https://youtube.com/embed/VXGF3trD92Q"} />

      </main>
    </>
  );
}