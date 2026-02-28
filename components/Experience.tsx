import type { ExperienceProps } from '../types/experience';

export function Experience({ title, company, date, description }: ExperienceProps) {
    return (
        <article className="grid grid-cols-2 gap-1 p-4 border rounded-md bg-white dark:bg-gray-800 justify-between">
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="font-semibold">{company}</p>
              <p className="text-gray-500 dark:text-gray-400 ">{date}</p>
            </div>
            <div>
              <p>{description}</p>
            </div>
        </article>
    )
}