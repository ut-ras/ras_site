import people from "@/constant/people.json";
import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import styles from "@/css/pages/committees/CorporateFundraising.module.css";
import Card from "@/components/Card";

export default function CorporateFundraising() {
    return (
        <main>
            <div className={styles.big}>
                <div className={styles.half}>
                    <h1>Corporate</h1>
                    <h2>Committee Head: {people.committee_heads[5].name}</h2>
                    <Card title="What do we do?">
                        <p>The corporate committee is responsible for reaching out to companies to build a connection and establish a partnership with RAS. We also plan and prepare for tech talks, workshops, and special events with corporate partners. This year we will be offering events to be held virtually, in-person, or a combination! Being part of the corporate committee allows students to develop the soft skills needed for communication and establishing connections.</p>
                        <p>Our current focus is to update our contact list as there have been many changes in the past year.</p>

                    </Card>
                    <Card title="Who can join?">
                        <p>All majors and years are welcome to join! Please contact the corporate relations officer, {people.committee_heads[5].name}, at {people.committee_heads[5].email} for any questions, concerns, or interest in joining the corporate committee.</p>
                        <p>Also, check out our <Link target="_blank" to={links.project_brochure}>Project Brochure</Link> and our <Link target="_blank" to={links.corporate_packet}>Corporate Packet</Link>!</p>
                    </Card>
                </div>


                <div className={styles.half}>
                    <h1>Fundraising</h1>
                    <h2>Committee Head: {people.committee_heads[6].name}</h2>

                    <Card title="What do we do?">
                        <p>Robots are very expensive; hence, we have fundraising to raise money for our projects! This year we are doing profit shares, getting grants, and raising money through Hornrasier and 40ForForty.</p>
                    </Card>

                    <Card title="How often do we meet?">
                        <p>Every second and fourth Sunday of the month, at the same time as the corporate committee meeting.</p>
                    </Card>

                    <Card title="Who can join?">
                        <p>All majors and years are welcome to join! Please contact the fundraising coordinator officer, {people.committee_heads[6].name}, at {people.committee_heads[6].email}, for any questions, concerns, or interest in joining the fundraising committee.</p>
                    </Card>
                </div>
            </div>
        </main>
    );
}