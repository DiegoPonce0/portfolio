import type { ExperienceProps } from '../types/experience';
import styles from './Experience.module.css';

export function Experience({ title, company, date, description }: ExperienceProps) {
    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <p className={styles.muted}>{company}</p>
            <p className={styles.muted}>{date}</p>
            <p>{description}</p>
        </article>
    )
}