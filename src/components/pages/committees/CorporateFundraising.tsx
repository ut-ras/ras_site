import people from "@/constant/people.json";
import { Link } from "react-router-dom";
import links from "@/constant/links.json";

export default function CorporateFundraising() {
    return (
        <div>
            <h1>Corporate</h1>
            <h3>Committee Head: {people.committee_heads.corporate_head.name} (Discord: {people.committee_heads.corporate_head.discord})</h3>

            <h4>What do we do?</h4>
            <p>The corporate committee is responsible for reaching out to companies to build a connection and establish a partnership with RAS. We also plan and prepare for tech talks, workshops, and special events with corporate partners. This year we will be offering events to be held virtually, in-person, or a combination! Being part of the corporate committee allows students to develop the soft skills needed for communication and establishing connections.</p>
            <p>Our current focus is to update our contact list as there have been many changes in the past year.</p>

            <h4>Who can join?</h4>
            <p>All majors and years are welcome to join! Please contact the corporate relations officer, {people.committee_heads.corporate_head.name}, at {people.committee_heads.corporate_head.email} for any questions, concerns, or interest in joining the corporate committee.</p>

            <p>Also, check out our <Link target="_blank" to={links.project_brochure}>Project Brochure</Link> and our <Link target="_blank" to={links.corporate_packet}>Corporate Packet</Link>!</p>


            <h1>Fundraising</h1>
            <h3>Committee Head: {people.committee_heads.fundraising_head.name} (Discord: {people.committee_heads.fundraising_head.discord})</h3>

            <h4>What do we do?</h4>
            <p>Robots are very expensive; hence, we have fundraising to raise money for our projects! This year we are doing profit shares, getting grants, and raising money through Hornrasier and 40ForForty.</p>

            <h4>How often do we meet?</h4>
            <p>Every second and fourth Sunday of the month, at the same time as the corporate committee meeting.</p>

            <h4>Who can join?</h4>
            <p>All majors and years are welcome to join! Please contact the fundraising coordinator officer, {people.committee_heads.fundraising_head.name}, at {people.committee_heads.fundraising_head.email}, for any questions, concerns, or interest in joining the fundraising committee.</p>
        </div>
    );
}