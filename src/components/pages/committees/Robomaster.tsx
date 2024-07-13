import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";

export default function Robomaster() {
    return (
        <div>
            <h1>Robomaster Committee</h1>
            <h3><Link target="_blank" to={links.robomaster_discord}>Discord</Link></h3>
            <h4>Committee Head: {people.committee_heads.robomaster_head.name} (Discord: {people.committee_heads.robomaster_head.discord})</h4>

            <h2> Fall 2024 Meetings: TBD!</h2>
            <ul>

            </ul>

            <h2> Robomaster Competition </h2>
            <p>RoboMaster combines elements of League of Legends and an FPS game along with robotics and engineering. Two teams put 3 robots out on the field, each with a different set of abilities, and a goal of taking down the other team’s base. In order to win, robots shoot plastic pellets at the opposing team’s robots and base.</p>
            <p>RoboMaster is unlike any other collegiate-level robotics competition. Not only does the competition challenge students to build both autonomous and driver-controlled robots, but it also allows teams the opportunity to construct drones. Teams use industry-standard programs like Keil and CAD software, allowing students to gain more practical experience in their respective engineering field of study. RoboMaster is also a very new competition in the United States, which allows us to greatly impact its future.</p>
            <p>You can find out more about the competition <Link target="_blank" to="https://www.robomasterna.com/">here</Link></p>

            <h2>Accomplishments</h2>
            <ul>
                <li>Placed 4th in 2022 North American RoboMaster Competition.</li>
            </ul>
            <h2> Get Involved! </h2>
            <p>The competition requires skills from all areas of robotics and we could always use more help. If you&aposre interested in hardware design and CAD, hardware manufacturing, electronics and PCB design, or software development come check us out and join our Discord server.</p>
        </div>
    );
}