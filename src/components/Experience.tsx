import type { ExperienceProps } from '../../types/experience';

export function Experience({ title, company, date, description }: ExperienceProps) {
    return (
        <article className="relative grid grid-cols-[40px_1fr] md:grid-cols-[40px_300px_1fr] md:p-4 py-4 bg-white dark:bg-background-dark justify-between">
            
            <div className="relative flex justify-center">
              <div className="h-4 w-4 rounded-full bg-yellow-400 z-20" />
            </div>
            
            <div>
              <h3 className="text-yellow-400 font-semibold text-lg">{title}</h3>
              <p className="font-semibold">{company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 ">{date}</p>
            </div>
            <div className="pl-10 col-span-2 md:col-start-3 md:col-span-1 mt-4 md:mt-0">
              <p>{description}</p>
            </div>
        </article>
    )
}