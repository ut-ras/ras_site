import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo_inverted.png";
import styles from "@/css/Header.module.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    const navigationArray = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Calendar", link: "/calendar" },
        {
            title: "Committees", link: "/committees", subLinks: [
                { title: "Demobots", link: "/committees/demobots" },
                { title: "IGVC", link: "/committees/igvc" },
                { title: "Robomaster", link: "/committees/robomaster" },
                { title: "Robotathon", link: "/committees/robotathon" },
                { title: "VexU", link: "/committees/vexu" },
                { title: "Corporate/Fundraising", link: "/committees/corporate-fundraising" },
            ]
        },
        { title: "Media", link: "/media" },
        { title: "Blog", link: "/blog" },
        { title: "Leadership", link: "/leadership" },
        { title: "Supporters", link: "/supporters" },
        { title: "Resources", link: "/resources" },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
                    {navigationArray.map(({ title, link, subLinks }) => (
                        <div key={link} className={styles.navLinkWrapper}>
                            <Link to={link} onClick={() => setMenuOpen(false)}>
                                <p
                                    className={`${styles.navLink} ${pathname === link ? styles.navLinkActive : styles.navLinkInactive}`}
                                >
                                    {title}
                                </p>
                            </Link>
                            {subLinks && (
                                <div className={styles.dropdownMenu}>
                                    {subLinks.map(({ title, link }) => (
                                        <Link key={link} to={link} onClick={() => setMenuOpen(false)}>
                                            <p className={styles.dropdownLink}>{title}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/join" className={styles.homeLink}>Join here!</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
