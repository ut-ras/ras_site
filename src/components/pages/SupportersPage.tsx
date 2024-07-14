import { Link } from "react-router-dom";
import people from "@/constant/people.json";
import Card from "@/components/Card";
import styles from "@/css/pages/SupportersPage.module.css";
import TI_logo from "@/assets/TI_logo.jpg";


export default function Supporters() {
    return (
        <main>
            <h1>Support RAS!</h1>
            <div className={styles.supportRas}>
                <Card title="Project Brochure">
                    <p>Looking for a brief description and images of the current active committees, projects, activities, and student engagement? Check it out <Link target="_blank" to="https://ras.ece.utexas.edu/resources/supporters/Spring%202023%20Project%20Brochure.pdf" >here</Link>!</p>
                </Card>

                <Card title="Corporate Packet">
                    <p>RAS is always excited to collaborate with corporate partners through general meetings and tech talks, workshops, and social events. At the moment, we offer virtual, in-person, and hybrid events.            </p>
                    <p> If you would like to become a supporter, please view our <Link target="_blank" to="https://drive.google.com/file/d/1PpTgN_sBkZPoK2QfrdiO4NSIL-gvcZ-N/view">corporate packet</Link> for details.</p>
                </Card>
            </div>

            <h1>Fall 2024 Company Partners</h1>
            <p className={styles.thanks}>We would like to thank our company partners for supporting and collaborating with us. We look forward to continuing to work with you!</p>
            <p className={styles.thanks}>Please contact our corporate relations officer, {people.committee_heads[5].name}, at {people.committee_heads[5].email} if you have any questions or for more information.</p>
            <Card title="Gold">
                <div className={styles.partners}>
                    <img className={styles.companyLogo} src={TI_logo} width="70" height="70" />
                    <span className={styles.companyName}>Texas Instruments</span>
                </div>
            </Card>
        </main >
    )
}