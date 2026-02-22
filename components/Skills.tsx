import type { SkillsProps } from '../types/skills';
import styles from './Skills.module.css';

export function Skills({ title, description }: SkillsProps) {
    return (
        <div className={styles.skillsCard}>
            <h2 className={styles.skillsTitle}>{title}</h2>
            <p className={styles.skillsList}>{description}</p>
        </div>
    )
}