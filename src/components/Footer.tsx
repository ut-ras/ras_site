import React from "react";
import Container from "./Container";
import logo from "@/assets/logo.png";
import SocialIcon from "@/components/SocialIcon";
import styles from "@/css/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container className={styles.container}>
                <img src={logo} alt="logo" className={styles.logo} />
                <p className={styles.text}>
                </p>
                <SocialIcon />
            </Container>
        </div>
    );
};

export default Footer;
