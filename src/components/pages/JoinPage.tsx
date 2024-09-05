import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import { Typewriter } from "react-simple-typewriter";
import ImageGallery from "react-image-gallery";
import styles from "@/css/pages/JoinPage.module.css";
import img1 from "@/assets/gallery/rasbanner2022.png";
import img3 from "@/assets/gallery/2.jpg";
import img4 from "@/assets/gallery/3.jpg";
import img5 from "@/assets/gallery/5.jpg";
import img6 from "@/assets/gallery/Couchbot.jpg";
import img7 from "@/assets/gallery/GirlDay.jpg";
import img8 from "@/assets/gallery/Gone_To_Engineering.jpg";
import img9 from "@/assets/gallery/Micromouse2019.jpg";
import img10 from "@/assets/gallery/Robotathon2018.jpg";

const words = [
    "talk to our leaders!",
    "learn more about our committees!",
    "eat some free food!",
    "listen to corporate tech talks!",
    "make some new friends!",
];

const images = [
    {
        original: img1,
    },
    {
        original: img3,
    },
    {
        original: img4,
    },
    {
        original: img5,
    },
    {
        original: img6,
    },
    {
        original: img7,
    },
    {
        original: img8,
    },
    {
        original: img9,
    },
    {
        original: img10,
    },
];

export default function Join() {
    return (
        <main className={styles.main}>
            <div className={styles.text}>
                <h1> Join here!</h1>
                <p> New members can join at <b>any</b> time. <b>No experience</b> necessary! </p>
                <p>New members should fill the following forms: <Link target="_blank" to={links.membership_form}> Membership Form</Link>, <Link target="_blank" to={links.dues}> Dues</Link>, and <Link target="_blank" to={links.safety_waiver}> Safety Waiver </Link>.</p>
                <h2> Discord Links: </h2>
                <div>
                    Join the RAS Discord <Link target="_blank" to={links.ras_discord_link}>here</Link>!

                    Discord servers for specific committees are listed below. More details on the <Link to={"/committees"}>Committees</Link> page.
                    <ul>
                        <li><Link target="_blank" to={links.demobots_discord}> Demobots </Link></li>
                        <li><Link target="_blank" to={links.igvc_discord}> IGVC </Link></li>
                        <li><Link target="_blank" to={links.robomaster_discord}> Robomaster </Link></li>
                        <li><Link target="_blank" to={links.vexu_discord}> VexU </Link></li>
                    </ul>
                </div>
                <h2> Come to our general meetings to: </h2>
                <Typewriter
                    words={words}
                    loop={30}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
            <div className={styles.column}>
                <ImageGallery items={images} />
            </div>
        </main>
    );
}

// link to join ras discord
// links to all committees ras discords
// links to forms for joining committees
// write about general meetings, link to calendar page