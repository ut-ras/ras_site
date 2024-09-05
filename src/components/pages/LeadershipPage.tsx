import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProfileCard from '@/components/ProfileCard';
import styles from '@/css/pages/LeadershipPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import people from "@/constant/people.json";

import PresidentImage from "@/assets/leaders/ShreeyaS23.jpg";
import VicePresidentImage from "@/assets/leaders/CarolynS23.jpg";
import TreasurerImage from "@/assets/leaders/Raghav_Sp24.jpg";
import WebmasterImage from "@/assets/leaders/Dhruv_Sp2024.jpg";
import OutreachCoordinatorImage from "@/assets/leaders/Shrub_Sp24.jpg";
import IGVCImage from '@/assets/leaders/Dhruv_Sp2024.jpg';
import VexUImage from "@/assets/leaders/F22Hasif.jpg";
import RobomasterImage from "@/assets/leaders/Eddie_Sp24.jpg";
import RobotathonImage from "@/assets/leaders/YilinS23.jpg";

function setImage(title: string) {
    return (
        title === "President" ? <img src={PresidentImage} /> :
            title === "Vice President" ? <img src={VicePresidentImage} /> :
                title === "Treasurer" ? <img src={TreasurerImage} /> :
                    title === "Webmaster" ? <img src={WebmasterImage} /> :
                        title === "Outreach Coordinator" ? <img src={OutreachCoordinatorImage} /> :
                            title === "IGVC" ? <img src={IGVCImage} /> :
                                title === "VexU" ? <img src={VexUImage} /> :
                                    title === "Robomaster" ? <img src={RobomasterImage} /> :
                                        title === "Robotathon" ? <img src={RobotathonImage} /> : null

    );
}

export default function LeadershipPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1250);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1250);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <main>
            <h1>RAS Leadership</h1>
            <h2> Officers </h2>
            {isLargeScreen ? (
                <div className={styles.cards}>
                    {people.officers.map(officer => (
                        <ProfileCard key={officer.name} title={`${officer.name}`} className={styles.imageInCard}>
                            <p>{officer.title}</p>
                            {setImage(officer.title)}
                            <p><a href={`mailto:${officer.email}`}>{officer.email}</a></p>
                            <p>{officer.bio}</p>
                        </ProfileCard>
                    ))}
                </div>
            ) : (
                <Slider {...sliderSettings} className={styles.slider}>
                    {people.officers.map(officer => (
                        <ProfileCard key={officer.name} title={`${officer.name}`} className={styles.imageInCard}>
                            <p>{officer.title}</p>
                            {setImage(officer.title)}
                            <p><a href={`mailto:${officer.email}`}>{officer.email}</a></p>
                            <p>{officer.bio}</p>
                        </ProfileCard>
                    ))}
                </Slider>
            )}

            <h2> Committee Heads </h2>
            {isLargeScreen ? (
                <div className={styles.cards}>
                    {people.committee_heads.map(committee_head => (
                        <ProfileCard key={committee_head.name} title={`${committee_head.name}`} className={styles.imageInCard}>
                            <p>{committee_head.title}</p>
                            {setImage(committee_head.title)}
                            <p>Discord: {committee_head.discord}</p>
                            <p>{committee_head.bio}</p>
                        </ProfileCard>
                    ))}
                </div>
            ) : (
                <Slider {...sliderSettings} className={styles.slider}>
                    {people.committee_heads.map(committee_head => (
                        <ProfileCard key={committee_head.name} title={`${committee_head.name}`} className={styles.imageInCard}>
                            <p>{committee_head.title}</p>
                            {setImage(committee_head.title)}
                            <p>Discord: {committee_head.discord}</p>
                            <p>{committee_head.bio}</p>
                        </ProfileCard>
                    ))}
                </Slider>
            )}

            <h2> General Leaders </h2>
            {isLargeScreen ? (
                <div className={styles.cards}>
                    {people.leaders.map(leader => (
                        <ProfileCard key={leader.name} title={`${leader.name}`}>
                            <p>{leader.title}</p>
                            <p>{leader.bio}</p>
                        </ProfileCard>
                    ))}
                </div>
            ) : (
                <Slider {...sliderSettings} className={styles.slider}>
                    {people.leaders.map(leader => (
                        <ProfileCard key={leader.name} title={`${leader.name}`}>
                            <p>{leader.title}</p>
                            <p>{leader.bio}</p>
                        </ProfileCard>
                    ))}
                </Slider>
            )}

        </main>
    );
}
