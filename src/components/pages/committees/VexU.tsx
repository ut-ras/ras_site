import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";
import styles from "@/css/pages/committees/Robotathon.module.css";
import { FaDiscord } from "react-icons/fa6";
import Card from "@/components/Card";

export default function VexU() {
    return (
        <main>
            <h1>VexU Committee</h1>
            <h2>Committee Head: {people.committee_heads[4].name}</h2>
            <div className={styles.DiscordLink}>
                <a href={links.vexu_discord} target="_blank" className={styles.portfolioIcon}>
                    <FaDiscord size={40} />
                </a>
                <h3><Link target="_blank" to={links.vexu_discord}>Discord</Link></h3>
            </div>
            <p>Vex U is an international robotics competition where university teams build two robots and compete in a sports-like challenge. More information about this year's challenge can be found <Link target="_blank" to="https://www.youtube.com/watch?v=Sx6HJSpopeQ">here</Link></p>
            <div className={styles.cards}>
                <Card title="Fall 2024 Meetings">
                    <p>To be determined!</p>
                </Card>

                <Card title="What we do" className={styles.imageInCard}>
                    <ul>
                        <p>Our committee designs, builds, and programs robots to complete this challenge in competition against other universities.</p>
                    </ul>
                </Card>
                <Card title="Recommended Experience">
                    <ul>
                        <li>Mechanical engineers interested in problem solving, CAD and manufacturing.</li>
                        <li>Software engineers interested in estimation, autonomy, and control, using C++, Python, and ROS.</li>
                        <li>Electrical engineers interested in basic hardware design and embedded programming.</li>
                    </ul>
                </Card>
                <Card title="Contact">
                    <p>For more information, reach out to {people.committee_heads[4].name} at {people.committee_heads[4].discord} on Discord. Thanks for reading and we hope to meet you!</p>
                </Card>
            </div>


        </main>
    );
}