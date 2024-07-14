import { Link } from "react-router-dom";
import FeatureVideo from "../FeatureVideo";
import styles from "@/css/pages/CommitteesPage.module.css";
import Card from "@/components/Card";

export default function Committees() {
    return (
        <main>
            <h1> Committees </h1>
            <div className={styles.cards}>
                <div className={styles.text}>
                    <Card title="RAS currently has 6 active committees. Three of them are competitive:">
                        <ul>
                            <li><Link to="/committees/demobots">Demobots:</Link>  We build robots to show off. RC cars, dancing minibots, and a motorized couch.</li>
                            <li><Link to="/committees/igvc">IGVC:</Link> Aiming to win the Intelligent Ground Vehicle Competition with our robot, RAS Ranger.</li>
                            <li><Link to="/committees/robomaster">Robomaster:</Link> We build small human controlled robots to compete in an annual competition hosted by DJI.</li>
                        </ul>
                    </Card>
                    <Card title="We have 3 non-competitive committees:">
                        <p></p>
                        <ul>
                            <li><Link to="/committees/robotathon">Robotation:</Link> A yearly RAS run and hosted introductory robotics competition.</li>
                            <li><Link to="/committees/vexu">VexU:</Link> We deisgn, build, and program robots to compete in the Vex U robotics competition</li>
                            <li><Link to="/committees/corporate-fundraising">Corporate/Fundraising:</Link> We reach out to companies and build connections with them.</li>
                        </ul>
                        Click on the links to learn more about each committee!
                    </Card>


                    <Card title="We also have four inactive committees:">
                        <ul>
                            <li>Micromouse: A fast maze-solving robot.</li>
                            <li>CURM: The Convention for Unconventional Robotic Movement; a yearly RAS run and hosted event.</li>
                            <li>Region 5: A robotics competition between over 40 universities from southwest states.</li>
                            <li>RoboSub: We build underwater autonomous robots to compete in a annual collegiate competition.</li>
                        </ul>
                    </Card>
                </div>

                <div className={styles.featureVideo}>
                    <FeatureVideo title="CouchBot Video" src="https://www.youtube.com/embed/BwIWip_Jpog" />
                </div>
            </div>

        </main>)

}
// hype video of each committee, explained
