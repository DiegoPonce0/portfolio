import type { ProjectsProps } from '../types/projects';

const techColors: Record<string, string> = {
  React: 'bg-blue-500/10 text-blue-600',
  'Node.js': 'bg-green-500/10 text-green-600',
  TypeScript: 'bg-blue-600/10 text-blue-800',
  WordPress: 'bg-indigo-500/10 text-indigo-600',
  Elementor: 'bg-pink-500/10 text-pink-600',
  'Technical SEO': 'bg-yellow-400/20 text-yellow-700',
  Woocommerce: 'bg-purple-500/10 text-purple-600',
  'Custom Plugin Development': 'bg-gray-500/10 text-gray-600',
  'Avada Theme': 'bg-red-500/10 text-red-600',
  ACF: 'bg-teal-500/10 text-teal-600',
  CPTs: 'bg-orange-500/10 text-orange-600'
};

export function Projects({ img, title, description, technology, result, link }: ProjectsProps) {
    return (
        <article className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <img src={img} alt={title} className="h-64 w-auto" />
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
                <a href={link} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project →</a>
            </div>
        </article>
    )
}