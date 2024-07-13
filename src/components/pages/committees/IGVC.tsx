import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";

export default function IGVC() {
    return (
        <div>
            <h1>IGVC Committee</h1>
            <h3><Link target="_blank" to={links.igvc_discord}>Discord</Link></h3>
            <h4>Committee Head: {people.committee_heads.igvc_head.name} (Discord: {people.committee_heads.igvc_head.discord})</h4>

            <h2> Fall 2024 Meetings: TBD!</h2>
            <ul>

            </ul>

            <h2> IGVC Competition </h2>
            <p>IGVC is a competitive committee whose objective is to build an autonomous vehicle! It must be able to navigate a football field-sized obstacle course under a time limit. The fastest robot to successfully traverse the course wins a grand prize of $3000.</p>
            <h2> Our Robot! </h2>
            <h2> Subteams: </h2>
            <h3> Mechanical </h3>
            <ul>
                <li>Desigining, machining, and building the robot to be ready for competition</li>
                <li>No experience necessary</li>
            </ul>
            <h3> Electrical </h3>
            <ul>
                <li>Circuit design</li>
                <li>Control systems</li>
                <li>Able to interpret circuit schematics/diagrams</li>
            </ul>
            <h3> Software </h3>
            <ul>
                <li>Autonomous navigation systems</li>
                <li>LiDAR Sensor</li>
                <li>GPS</li>
                <li>Python/C++ Required</li>
                <li>ROS Library (not required to know, but great if you have experience) </li>
            </ul>
            <h2> Get involved! </h2>
            <p> If you&aposre interested in joining, reach out to me at {people.committee_heads.igvc_head.email}</p>
        </div>
    );
}