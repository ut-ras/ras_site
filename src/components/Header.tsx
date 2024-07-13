import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import Button from "@/components/Button";
import { useLocation } from "react-router-dom";
import styles from "@/css/Header.module.css";

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const navigationArray = [
        { title: "Home", link: "/" },
        { title: "Join", link: "/join" },
        { title: "About", link: "/about" },
        { title: "Calendar", link: "/calendar" },
        { title: "Committees", link: "/committees" },
        { title: "Media", link: "/media" },
        { title: "Blog", link: "/blog" },
        { title: "Leadership", link: "/leadership" },
        { title: "Supporters", link: "/supporters" },
        { title: "Resources", link: "/resources" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.navLinks}>
                    {navigationArray.map(({ title, link }) => (
                        <Link key={link} to={link}>
                            <p
                                className={`${styles.navLink} ${pathname === link ? styles.navLinkActive : styles.navLinkInactive}`}
                            >
                                {title}
                            </p>
                        </Link>
                    ))}

                    <Button className={styles.button} />
                </div>
            </div>
        </header>
    );
};

export default Header;
