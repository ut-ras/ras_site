import { Outlet } from "react-router-dom";
import styles from "@/css/pages/committees/CommitteesPageLayout.module.css";

export default function CommitteePageLayout() {
    return (
        <div className={styles.layout}>
            <Outlet />
        </div>)
}