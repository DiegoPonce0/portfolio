import type { ProjectsProps } from '../types/projects';
import styles from './Projects.module.css';

export function Projects({ img, title, description, technology, result, link}: ProjectsProps) {
    return (
        <article className={styles.projectCard}>
            <img src={img} alt={title} className={styles.projectImage} />
            <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{title}</h2>
                <p className={styles.projectDescription}>{description}</p>
                <p className={styles.projectTech}>{technology}</p>
                <p className={styles.projectResult}>{result}</p>
                <a href={link} className={styles.projectLink}>View Project →</a>
            </div>
        </article>
    )
}