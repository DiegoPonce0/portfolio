import type { SkillsProps } from '../types/skills';


export function Skills({ title, description }: SkillsProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold pb-4">{title}</h2>
            <p className="p-2 border border-gray-300 dark:border-gray-700 rounded-md">{description}</p>
        </div>
    )
}