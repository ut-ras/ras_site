import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";
import styles from "@/css/pages/committees/Robomaster.module.css";
import { FaDiscord } from "react-icons/fa6";
import Card from "@/components/Card";

export default function Robomaster() {
    return (
        <main>
            <h1>Robomaster Committee</h1>
            <h2>Committee Head: {people.committee_heads[2].name}</h2>
            <div className={styles.DiscordLink}>
                <a href={links.robomaster_discord} target="_blank" className={styles.portfolioIcon}>
                    <FaDiscord size={40} />
                </a>
                <h3><Link target="_blank" to={links.robomaster_discord}>Discord</Link></h3>
            </div>
            <p>RoboMaster combines robotics and engineering with the excitement of a FPS game. Teams build a fleet of three robots each that are either driver-controlled or fully autonomous to engage in projectile combat.</p>
            <p>Unlike many other collegiate-level robotics competitions, RoboMaster encompasses a wide variety of engineering disciplines. We pride ourselves in providing our members with industry-level experience. Our mechanical team designs and optimizes our custom parts using SolidWorks and FEA which are manufactured via 3D printing, manual milling, and laser cutting. Our electrical and firmware teams ensure that we can implement sophisticated control algorithms using microcontrollers and custom PCBs, while our software team develops advanced AI-targeting and self-navigation on our NVIDIA Jetson coprocessors. You can find out more about the competition <Link target="_blank" to="https://www.robomasterna.com/">here</Link></p>

            <div className={styles.cards}>
                <Card title="Fall 2024 Meetings">
                    {/* <<p>To be determined!</p>> */}
                    <p>Fridays 5pm - 7pm in <a href="https://inventionworks.engr.utexas.edu/" target="_blank">TIW</a></p>
                </Card>

                <Card title="Accomplishments">
                    <ul>
                        <li>Top 8 finish at 2024 North America RoboMaster Competition.</li>
                        <li>Placed 4th in 2022 North American RoboMaster Competition.</li>
                    </ul>
                </Card>
                <Card title="Get Involved!">
                    <p>The competition requires skills from all areas of robotics and we could always use more help. If you're interested in hardware design and CAD, hardware manufacturing, electronics and PCB design, or software development come check us out and join our Discord server.</p>
                </Card>
            </div>

        </main>
    );
}