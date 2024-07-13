import { Link } from "react-router-dom"
import links from "@/constant/links.json"

export default function Resources() {
    return (
        <>

            <h1> Resources </h1>
            <h1>Contact Us</h1>
            <h2>Office</h2>
            <p>We live in <Link target="_blank" to="https://maps.utexas.edu/buildings/utm/eer">EER</Link> 0.822C; feel free to stop by.</p>
            <h2> Discord </h2>
            <p>Most of our internal communication happens in Discord. You can join <Link target="_blank" to={links.ras_discord_link}>here</Link>!</p>
            <h2> Instagram </h2>
            <p>To keep up with current events and happenings, follow us <Link target="_blank" to="https://www.instagram.com/ut_ieee_ras/?hl=en">here</Link></p>
            <h2> Leadership </h2>
            <p> To contact our Leaders, check out the <Link to="/leadership">leadership page</Link>.</p>
            <h2>New member links:</h2>
            <p><b>New members:</b> please fill out the following forms (coming soon)!</p>
            <ul>
                <li> <Link target="_blank" to="">RAS Fall 2024 Membership Form</Link> </li>
                <li> <Link target="_blank" to="">RAS 2024 Dues</Link> </li>
                <li> <Link target="_blank" to="">Safety Waiver</Link> </li>
            </ul>

            <h2>Discord Links: </h2>
            <ul><div>
                <li><Link target="_blank" to={links.ras_discord_link}>RAS Discord</Link></li>
                <li><Link target="_blank" to={links.demobots_discord}> Demobots </Link></li>
                <li><Link target="_blank" to={links.igvc_discord}> IGVC </Link></li>
                <li><Link target="_blank" to={links.robomaster_discord}> Robomaster </Link></li>
                <li><Link target="_blank" to={links.vexu_discord}> VexU </Link></li>
            </div></ul>

            <h2>Github:</h2>
            <p>Check out our GitHub repositories <Link target="_blank" to={links.github}>here</Link>!</p>

            <h2>Learning Resources:</h2>
            <p> Coming soon! </p>

            <h2>Newsletter:</h2>
            <p> Coming soon! </p>

            <h2> Photo Gallery: </h2>
            <p> Coming soon! </p>

            <h2> RAS Constitution: </h2>
            <p>Coming soon!</p>

        </>)
}
// links to learning materials to get started
// links to GitHub
// links to Discord
// links to forms, etc
// constitution links
// newsletter signups
// link to photos
// location, contact, other info about club