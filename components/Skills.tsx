import type { SkillsProps } from '../types/skills';


export function Skills({ title, icons }: SkillsProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold pb-4 text-center">
                {title}
            </h2>
            
            
            <div className="flex flex-wrap justify-center gap-6">
                {icons.map((icon, index) => (
                <svg
                    key={index}
                    viewBox="0 0 24 24"
                    className="w-10 h-10 fill-current text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200"
                >
                    <use href={`/sprite.svg#${icon.toLowerCase()}`} />
                </svg>
                ))}
            </div>
        
        </div>
    )
}