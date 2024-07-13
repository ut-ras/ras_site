import { Link } from "react-router-dom";
import people from "@/constant/people.json";

export default function Supporters() {
    return (
        <div>
            <h1>Support RAS!</h1>
            <h2>Project Brochure</h2>
            <p>Looking for a brief description and images of the current active committees, projects, activities, and student engagement? Check it out <Link target="_blank" to="https://ras.ece.utexas.edu/resources/supporters/Spring%202023%20Project%20Brochure.pdf" >here</Link>!</p>

            <h2>Corporate Packet</h2>
            <p>RAS is always excited to collaborate with corporate partners through general meetings and tech talks, workshops, and social events. At the moment, we offer virtual, in-person, and hybrid events.            </p>

            <p> If you would like to become a supporter, please view our <Link target="_blank" to="https://drive.google.com/file/d/1PpTgN_sBkZPoK2QfrdiO4NSIL-gvcZ-N/view">corporate packet</Link> for details.</p>

            <h1>Fall 2024 Company Partners</h1>
            <p>We would like to thank our company partners for supporting and collaborating with us. We look forward to continuing to work with you!</p>
            <h2> Gold </h2>
            <ul><li>Texas Instruments</li></ul>
            <p>Please contact the corporate relations officer, {people.committee_heads.corporate_head.name}, at {people.committee_heads.corporate_head.email} if you have any questions or would like more information.</p>
        </div>
    )
}