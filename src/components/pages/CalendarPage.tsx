import links from "@/constant/links.json";

export default function Calendar() {
    return (
        <div>
            <p>Calendar of all upcoming RAS events:</p>

            <div className="card" style={{ "height": "600px" }}>
                <iframe src={links.calendar} style={{ "borderWidth": "0" }} width="800" height="600">
                </iframe>
            </div>

            <p>Here are some photos of our past general meetings and socials!</p>

        </div>
    )
}
// include photos of past general meetings
// include any photos of socials