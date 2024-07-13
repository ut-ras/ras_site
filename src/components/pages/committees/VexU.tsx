import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";

export default function VexU() {
    return (
        <div>
            <h1>VexU Committee</h1>
            <h3><Link target="_blank" to={links.vexu_discord}>Discord</Link></h3>
            <h4>Committee Head: {people.committee_heads.vexu_head.name} (Discord: {people.committee_heads.vexu_head.discord})</h4>

            <h2> Fall 2024 Meetings: TBD!</h2>
            <ul>

            </ul>

            <h2> VexU Competition </h2>
            <p>Vex U is an international robotics competition where university teams build two robots and compete in a sports-like challenge.</p>
            <p>More information about this year&aposs challenge can be found <Link target="_blank" to="https://www.youtube.com/watch?v=Sx6HJSpopeQ">here</Link></p>

            <h2>What we do</h2>
            <p>Our committee designs, builds, and programs robots to complete this challenge in competition against other universities.</p>

            <h2> Recommended Experience </h2>
            <ul>
                <li>Mechanical engineers interested in problem solving, CAD and manufacturing.</li>
                <li>Software engineers interested in estimation, autonomy, and control, using C++, Python, and ROS.</li>
                <li>Electrical engineers interested in basic hardware design and embedded programming.</li>
            </ul>
            <h2>Contact</h2>
            <p>For more information, reach out to {people.committee_heads.vexu_head.name} at {people.committee_heads.vexu_head.discord} on Discord. Thanks for reading and we hope to meet you!</p>
        </div>
    );
}