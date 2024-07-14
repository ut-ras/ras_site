import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";
import Card from "@/components/Card";
import styles from "@/css/pages/committees/Demobots.module.css"
import { FaDiscord } from "react-icons/fa6";

export default function Demobots() {
    return (
        <main>
            <h1>Demobots</h1>
            <h2>Committee Head: {people.committee_heads[0].name}</h2>
            <div className={styles.DiscordLink}>
                <a href={links.demobots_discord} target="_blank" className={styles.portfolioIcon}>
                    <FaDiscord size={40} />
                </a>
                <h3><Link target="_blank" to={links.demobots_discord}>Discord</Link></h3>
            </div>
            <p>Demobots is where the non-competitive bots of RAS are created. Demobots doesn’t have the harsh deadlines that a lot of the competition teams do; we focus on making fun robots and improving the bots we already have (like Couchbot! One of our longest Demobots projects)</p>

            <div className={styles.cards}>

                <Card title="Fall 2024 Meetings">
                    <p>To be determined!</p>
                </Card>

                <Card title="Current Demobots Projects">
                    <ul>
                        <li><b>Couch Bot</b>: a couch on wheels that can drive around via a controller!</li>
                        <li><b>Talons of Acquisition</b>: a claw machine bot</li>
                        <li><b>Dancebot</b>: robots that literally dance!</li>
                        <li><b>Armbot</b>: a robotic arm that moves!</li>
                        <li><b>Chessbot</b>: a robot that uses magnets to move pieces on a chessboard and play chess against an opponent!</li>
                        <li><b>Polargraph</b>: a robot that draws any given picture on a whiteboard!</li>
                    </ul>
                </Card>
                <Card title="Fetch your own ideas!">
                    <p>We love new robots so if you have a wacky new idea it could become the next demobot!! All experience levels are welcome as there are always new tasks to focus on in the variety of Demobots sub-committees. Look for us at the next UT Engineering event or contact us through the “Demobots” discord channel!</p>

                </Card>
            </div>

        </main >
    );
}