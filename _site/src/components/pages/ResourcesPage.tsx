import { Link } from "react-router-dom"
import links from "@/constant/links.json"
import Card from "@/components/Card"
import styles from "@/css/pages/ResourcesPage.module.css";

export default function Resources() {
    return (
        <main>
            <h1> Resources </h1>
            <p className={styles.office}>We live in <Link target="_blank" to="https://maps.utexas.edu/buildings/utm/eer">EER</Link> 0.822C; come and say hi!</p>
            <div className={styles.cards}>
                <Card title="New Members:" className={styles.card}>
                    <p><Link target="_blank" to={links.membership_form}>RAS Fall 2024 Membership Form</Link></p>
                    <p><Link target="_blank" to="">RAS 2024 Dues</Link></p>
                    <p><Link target="_blank" to={links.safety_waiver}>Safety Waiver</Link></p>
                </Card>
                <Card title="Stay connected!" className={styles.card}>
                    <p><Link target="_blank" to="https://www.instagram.com/ut_ieee_ras/?hl=en">Instagram</Link></p>
                    <p><Link target="_blank" to={links.github}>GitHub</Link></p>
                    <p><Link target="_blank" to={links.ras_discord_link}>RAS Discord</Link></p>
                    <p><Link target="_blank" to={links.demobots_discord}> Demobots </Link></p>
                    <p><Link target="_blank" to={links.igvc_discord}> IGVC </Link></p>
                    <p><Link target="_blank" to={links.robomaster_discord}> Robomaster </Link></p>
                    <p><Link target="_blank" to={links.vexu_discord}> VexU </Link></p>
                </Card>
            </div>

            {/* 
            <h2>Learning Resources:</h2>
            <p> Coming soon! </p>

            <h2>Newsletter:</h2>
            <p> Coming soon! </p>

            <h2> Photo Gallery: </h2>
            <p> Coming soon! </p>

            <h2> RAS Constitution: </h2>
            <p>Coming soon!</p> */}

        </main >)
}
// links to learning materials to get started
// links to GitHub
// links to Discord
// links to forms, etc
// constitution links
// newsletter signups
// link to photos
// location, contact, other info about club