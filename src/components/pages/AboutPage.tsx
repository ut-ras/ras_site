import React from "react";
import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import styles from "@/css/pages/AboutPage.module.css";
import Card from "@/components/Card";

const About = () => {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <p>
        The UT Austin IEEE Robotics and Automation Society (RAS) is an umbrella organization for several committees that build robots! Our office is located in EER 0.822C; feel free to drop by any time! Someone will usually always be in there.
      </p>
      <div className={styles.cards}>
        <Card title="Currently, RAS has 6 active committees:">
          <ul>
            <li>Demobots</li>
            <li>IGVC</li>
            <li>Robomaster</li>
            <li>Robotation</li>
            <li>VexU</li>
            <li>Corporate/Fundraising</li>
          </ul>
          <p className={styles.moreInfo}>
            For more information, please check out our <Link to="/committees">committees</Link> page.
          </p>
        </Card>

        <Card title="Outreach Activities">
          <p>RAS also participates in regular outreach activities:</p>
          <ul>
            <li>
              Refereeing local middle and high school <Link target="_blank" to={links.vex_robotics}> Vex Robotics Competitions</Link>.
            </li>
            <li>
              FLL Build Day: We assemble Lego fields for local middle school <Link target="_blank" to={links.fll}>First Lego League</Link> competitions.
            </li>
            <li>
              <Link target="_blank" to={links.gone_to_engineering}>Gone to Engineering</Link>: Help us recruit new UT students!
            </li>
            <li>
              <Link target="_blank" to={links.girl_day}>Engineering Girl's Day</Link>: Show off STEM for elementary/middle school students.
            </li>
          </ul>
        </Card>

        <Card title="Social Activities">
          <p>We host fun socials for our members too! Check out our calendar for upcoming socials. These include, but are not limited to:</p>
          <ul>
            <li>Video Game Nights: just about everything.</li>
            <li>Board Game Nights: also everything.</li>
          </ul>
        </Card>

        <Card title="Awards and Achievements">
          <p>RAS has also won numerous awards in competitions:</p>
          <ul>
            <li>2024 - VEX AI Robotics Competition World Champion (Excellence Award)</li>
            <li>2023 - VEXU World Championship Build Award</li>
            <li>2022: RoboMaster - First Prize - Placed 4th in 2022 North American RoboMaster Competition</li>
            <li>2013: IGVC - 15th place in AutoNav Challenge - DoloRAS</li>
            <li>2007: IGVC JAUS Level 1 Award; BlastyRAS, IEEE Region 5 - 5th Best Run - Whiny 1.1, FIRST - Rookie All-Star Award, Nationals Qualification - TinMan</li>
            <li>2006: IGVC - Highest Rookie Score - RASlow, IEEE Region 5 - Final Qualification, 4th Highest Score - Whiny, DPRG - Outdoor Long Haul, 2nd Place - RASlow, BEST - BEST Mentor Award</li>
            <li>2005: DPRG - RoboRama, 2nd Place</li>
            <li>2004: IEEE Region 5 - Finals Qualification - Kim Smith</li>
          </ul>
        </Card>
      </div>
    </main>
  );
};

export default About;
