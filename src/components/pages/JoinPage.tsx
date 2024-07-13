import { Link } from "react-router-dom";
import links from "@/constant/links.json";

export default function Join() {
    return (
        <div>
            <h1> Join here!</h1>
            <p> New members are welcome to join <b>any</b> time. There is no application or necessary experience to join RAS! </p>
            <p>Please fill the following forms if you intend to join RAS: <Link target="_blank" to=""> Membership Form</Link>, <Link target="_blank" to=""> Dues</Link>, and <Link target="_blank" to=""> Safety Waiver </Link>(coming soon).</p>
            <h2> Discord Links: </h2>
            <div>
                Join the RAS Discord <Link target="_blank" to={links.ras_discord_link}>here</Link>!

                Links to the Discord of each RAS committee is listed below. To find out more information about each committee, visit the <Link to={"/committees"}>Committees</Link> page.
                <p><Link target="_blank" to={links.demobots_discord}> Demobots </Link></p>
                <p><Link target="_blank" to={links.igvc_discord}> IGVC </Link></p>
                <p><Link target="_blank" to={links.robomaster_discord}> Robomaster </Link></p>
                <p><Link target="_blank" to={links.vexu_discord}> VexU </Link></p>
            </div>
            <h2> General Meetings: </h2>
            <p> At our general meetings, you can talk to our leaders to learn more about each committee and get some free food!</p>
            <h2> Weekly Newsletter </h2>
            <p> Coming soon! </p>
        </div>
    );
}

// link to join ras discord
// links to all committees ras discords
// links to forms for joining committees
// write about general meetings, link to calendar page