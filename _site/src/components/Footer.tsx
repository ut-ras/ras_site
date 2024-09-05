import React from "react";
import Container from "./Container";
import styles from "@/css/Footer.module.css";
import { FaGithub, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa6";
import links from "@/constant/links.json";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.icon}>
                <a href={links.ras_discord_link} target="_blank" className={styles.portfolioIcon}>
                    <FaDiscord size={40} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href={links.youtube} target="_blank" className={styles.portfolioIcon}>
                    <FaYoutube size={40} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href={links.github} target="_blank" className={styles.portfolioIcon}>
                    <FaGithub size={40} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href={links.instagram} target="_blank" className={styles.portfolioIcon}>
                    <FaInstagram size={40} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
