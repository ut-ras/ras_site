import styles from "@/css/ProfileCard.module.css";


type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function ProfileCard(content: Props) {
    return (
        <div className={styles.card}>
            <h4>
                <strong>
                    <span>
                        {content.title}
                    </span>
                </strong>
            </h4>
            <div className={styles.separator}></div>
            <div className={content.className}>
                {content.children}
            </div>
        </div>
    )

}