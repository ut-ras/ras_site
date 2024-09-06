import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";
import styles from "@/css/pages/committees/IGVC.module.css";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import Card from "@/components/Card";
import igvc_track from "@/assets/F22IGVC_Track.png";
import igvc_robot from "@/assets/F22IGVC_Robot.png";


export default function IGVC() {
    return (
        <main>
            <h1>IGVC Committee</h1>
            <h2>Committee Head: {people.committee_heads[1].name}</h2>
            <div className={styles.linkAndIcon}>
                <a href={links.igvc_discord} target="_blank" className={styles.portfolioIcon}>
                    <FaDiscord size={40} />
                </a>
                <h3><Link target="_blank" to={links.igvc_discord}>Discord</Link></h3>
            </div>
            <div className={styles.linkAndIcon}>
                <a href={links.igvc_github} target="_blank" className={styles.portfolioIcon}>
                    <FaGithub size={40} />
                </a>
                <h3><Link target="_blank" to={links.igvc_github}>GitHub</Link></h3>
            </div>
            <p>IGVC is a competitive committee whose objective is to build an autonomous vehicle! It must be able to navigate a football field-sized obstacle course under a time limit. The fastest robot to successfully traverse the course wins a grand prize of $3000.</p>
            <div className={styles.trackImageContainer}><img src={igvc_track} alt="IGVC Track" width="35%" height="auto" className={styles.trackImage} /></div>

            <div className={styles.cards}>
                <Card title="Fall 2024 Meetings">
                    <p>Fridays 5pm - 6pm</p>
                </Card>

                <Card title="Our Robot!" className={styles.imageInCard}>
                    <img src={igvc_robot} />
                </Card>
            </div>

            <h2> Subteams: </h2>
            <div className={styles.teamCards}>
                <Card title="Mechanical">
                    <ul>
                        <li>Desigining, machining, and building the robot to be ready for competition</li>
                        <li>No experience necessary</li>
                    </ul>
                </Card>
                <Card title="Electrical">
                    <ul>
                        <li>Circuit design</li>
                        <li>Control systems</li>
                        <li>Able to interpret circuit schematics/diagrams</li>
                    </ul>
                </Card>
                <Card title="Software">
                    <ul>
                        <li>Autonomous navigation systems</li>
                        <li>LiDAR Sensor</li>
                        <li>GPS</li>
                        <li>Python/C++ Required</li>
                        <li>ROS Library (not required to know, but great if you have experience) </li>
                    </ul>
                </Card>
            </div>
        </main>
    );
}