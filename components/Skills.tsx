import type { SkillsProps } from '../types/skills';
import styles from './Skills.module.css';

export function Skills({ title, description}: SkillsProps) {
    return (
        <>
            <div className={styles.skillsTitle}>{title}</div>
            <div className={styles.skillsList}>{description}</div>
        </>
    )
}