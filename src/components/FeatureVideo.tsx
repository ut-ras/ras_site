import React from 'react';
import styles from '@/css/FeatureVideo.module.css';

type Props = {
    title: string;
    src: string;
};

export default function FeatureVideo({ title, src }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <iframe
                    className={styles.iframeContainer}
                    src={src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
