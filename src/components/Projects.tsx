import type { ProjectsProps } from '../../types/projects';

const techColors: Record<string, string> = {
    React: 'bg-blue-500/10 text-blue-600',
    'Node.js': 'bg-green-500/10 text-green-600',
    TypeScript: 'bg-blue-600/10 text-blue-800 dark:text-blue-600',
    WordPress: 'bg-indigo-500/10 text-indigo-600',
    Elementor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
    'SEO': 'bg-yellow-400/20 text-yellow-700 dark:text-yellow-400',
    Woocommerce: 'bg-purple-500/10 text-purple-600',
    'Custom Plugin Development': 'bg-gray-500/10 text-gray-600 dark:bg-gray-200 dark:text-gray-800',
    ACF: 'bg-teal-500/10 text-teal-600',
    CPTs: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
};

export function Projects({ img, title, description, technology, result, link }: ProjectsProps) {
    return (
        <article className="group flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl border border-gray-100 dark:border-gray-700 transform-gpu">

            <img
                src={img}
                alt={title}
                className="h-32 md:h-64 w-auto transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />

            <div className="projectContent">
                <h2 className="text-2xl font-bold pb-2">{title}</h2>
                <p className="py-2">{description}</p>
                <ul className="flex flex-wrap gap-2 py-2">
                    {technology.map((tech, index) => (
                        <li
                            key={index}
                            className={`
                            px-3 py-1
                            text-xs font-semibold
                            rounded-full
                            ${techColors[tech] || 'bg-gray-200 text-gray-700'}
                        `}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                <p className="text-emerald-500 font-bold py-2 pb-4">{result}</p>
                <a href={link} target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project →</a>
            </div>
        </article>
    )
}