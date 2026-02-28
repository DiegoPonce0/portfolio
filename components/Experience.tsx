import type { ExperienceProps } from '../types/experience';

export function Experience({ title, company, date, description }: ExperienceProps) {
    return (
        <article className="experienceCard">
            <h3>{title}</h3>
            <p className="experienceMuted">{company}</p>
            <p className="experienceMuted">{date}</p>
            <p>{description}</p>
        </article>
    )
}