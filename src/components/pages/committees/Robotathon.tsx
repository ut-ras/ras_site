import { Link } from "react-router-dom";
import links from "@/constant/links.json";
import people from "@/constant/people.json";

export default function Robotathon() {
    return (
        <div>
            <h1>Robotathon Committee</h1>
            <h4>Committee Head: {people.committee_heads.robotathon_head.name} (Discord: {people.committee_heads.robotathon_head.discord})</h4>

            <h2> Robomaster Steering Committee Fall 2024 Meeting Times: TBD!</h2>
            <ul>

            </ul>

            <h2> What is Robotathon? </h2>
            <p>Robotathon is a fall semester introductory robotics competition, created and run by the UT IEEE Robotics and Automation Society (RAS). We teach the basics of robotics to those new to the field.</p>
            <p>About 50-100 participants are placed in teams of 4-5 people, assigned a mentor, and helped through designing and building a robot. You’ll then compete amongst your peers for everlasting glory! You can only compete once (no Robotathon veterans, please), but there are many other committees that you can join afterwards.</p>
            <p>Many people get started with robots and RAS by participating in Robotathon. If this isn’t your cup of tea, check out one of our <Link to="/committees">other committees</Link>.</p>

            <h2>What is Robotathon Steering Committee?</h2>
            <p>We’re a committee created in Spring 2020 to better design and host an engaging and exciting Robotathon competition. We decide on the competition idea and theme, design the competition field, write documentation and guides, and ultimately try to make the Robotathon experience the best it can be.</p>
            <p> Check out the <Link to="blog">blog</Link> posts to see in detail where we’ve been and where we’re going!</p>

            <h2> How do I sign up? </h2>
            <p>Registration is open at the beginning of the fall semester. Sign up here (link coming soon). You need to pay general member dues ($15) and Robotathon dues ($20) by kickoff on September 12th. We won’t kick you immediately from your team if you don’t, but you’ll be on probation and won’t be allowed access to the parts kit. General member dues can be paid with our online TXShop link. The Robotathon fee TXShop link will be live soon and we will send an update when it is ready! You also need to sign a safety waiver and fill out our general membership form. If you prefer to pay cash, dues can be paid after any RAS GM or at committee meetings or office hours when the Treasurer is present.</p>

            <h2> Fall 2022 Competition </h2>
            <p>Last year’s theme was JuRASsic! The competition was a points-based game where robots had to complete challenges using line following and wall following to corral the baby dinosaurs that have escaped! The 2022 rules can be found <Link target="_blank" to="https://docs.google.com/document/d/1ZbSUNumw-B0slGR1RJARkqImxICgCqAliouLhxk7YVY">HERE</Link></p>

            <h2> FAQ </h2>
            <h3> What are the robots like? </h3>
            <p> We provide a basic electronics kit including the following: </p>
            <ul>
                <li>servo motors</li>
                <li>battery pack</li>
                <li>IR distance sensors</li>
                <li>line sensors</li>
                <li>color sensor</li>
                <li>TM4C LaunchPad microcontroller</li>
                <li>and more!</li>
            </ul>
            <p> Teams generally use the resources available in the <Link target="_blank" to="https://texasinventionworks.com/">Texas Inventionworks</Link>, including 3D printers and laser cutters, to build the robot frame and mechanics. You can see some of the 2016 robots <Link target="_blank" to="https://www.flickr.com/photos/ut_ieee_ras/albums/72157679713279342/">here</Link>!</p>

            <h3> When does Robotathon happen? </h3>
            <p>Participants sign up for Robotathon at the beginning of the fall semester. Teams are formed by the Robotathon kickoff meeting, paired with a mentor, and taught basic robotics through weekly workshops up until the competition itself, which is typically during the middle of November. We unfortunately do not host Robotathon during the spring semester.</p>

            <h3> What do I need to know to participate? </h3>
            <p>Absolutely nothing! All you need is a open mind and a desire to learn. While this is a competition, it is also, above all, a learning experience designed to help teach robotics to those that want to learn. In addition, all participants are generally on the same level because this competition is restricted to newcomers to RAS - primarily freshmen!</p>

            <h3> Who can compete? </h3>
            <p>Any UT undergraduate can apply (you don’t have to be an engineer!). Students will be selected based on their expected time commitment for Robotathon over the semester, and their free schedules. This allows us to match you up with participants with similar schedules.</p>

            <h3> What is the time commitment like? </h3>
            <p>It’s up to you. However, the quality of your robot is directly correlated to the amount of time you and your team work on it. We’ve broken down the entire project into checkpoints, each task we expect to take from 2-5 hours in weekly commitment per person, increasing linearly with the challenge number.</p>
            <p>A good suggestion for keeping on the top of things is to set up meeting times with your group - ideally twice a week. Try to schedule one of the days during our Office Hours/Tech Talks/Checkpoints to get the most value out of the mentors.</p>

            <p>We will also make sure to put you on a team with people of similar schedules so you will have plenty of time to meet up and work on your robot!</p>

            <h3> I can’t make some event! What do I do? </h3>
            <p>Make sure you can attend the Robotathon kickoff meeting and Robotathon itself. As long as your team members can make any particular workshop or checkpoint, you’ll stay caught up. But it’s not nice to ghost your teammates! Make sure you communicate with your team and mentor and meet with them as often as possible!</p>

            <h3>Any further questions about Robotathon or RAS?</h3>
            <p>Contact me, {people.committee_heads.robotathon_head.name}, on Discord or visit our office at 0.822C! There’s usually a leader in the office. We are all here to help you out!</p>

        </div >
    );
}