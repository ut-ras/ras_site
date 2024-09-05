import links from "@/constant/links.json";
import styles from "@/css/pages/CalendarPage.module.css";

export default function Calendar() {
    return (
        <main className={styles.main}>
            <h2>Calendar of all upcoming RAS events:</h2>

            <div>
                <iframe src={links.calendar} className={styles.calendar}>
                </iframe>
            </div>

        </main>
    )
}
// include photos of past general meetings
// include any photos of socials