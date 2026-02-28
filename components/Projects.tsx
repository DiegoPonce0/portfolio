import type { ProjectsProps } from '../types/projects';

export function Projects({ img, title, description, technology, result, link }: ProjectsProps) {
    return (
        <article className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <img src={img} alt={title} className="h-64 w-auto" />
            <div className="projectContent">
                <h2 className="text-2xl font-bold pb-2">{title}</h2>
                <p className="py-2">{description}</p>
                <p className="border border-blue-400 rounded-md p-2">{technology}</p>
                <p className="text-emerald-500 font-bold py-2 pb-4">{result}</p>
                <a href={link} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project →</a>
            </div>
        </article>
    )
}