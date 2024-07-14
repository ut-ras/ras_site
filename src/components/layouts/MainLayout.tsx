import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import styles from "@/css/MainLayout.module.css";
import React, { useEffect } from 'react';



export default function MainLayout() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}