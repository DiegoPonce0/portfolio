import { useDarkMode } from "../hooks/useDarkMode";
import { useScroll } from '../hooks/useScroll';


export function Header() {
  const {isDark, toggleTheme} = useDarkMode();
  const scrolled = useScroll(40);

  const moonIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200">
      <use href={`/sprite.svg#moon`} />
    </svg>
  );

  const sunIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200">
      <use href={`/sprite.svg#sun`} />
    </svg>
  );

  
  return (
    <header className="
    sticky
    top-6 
    z-50
    ">
      <div className={`max-w-5xl mx-auto px-4 md:px-6 
        
        ${
            scrolled 
            ? "shadow-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md" 
            : "bg-transparent"
          }
        `}
       >
        
        <div className="flex items-center justify-between py-3 md:py-4">
          
          <h2 className="text-sm md:text-lg font-bold dark:text-white">
            Diego Ponce
          </h2>
        
          <div className="flex items-center gap-4 md:gap-8">

            <nav className="flex items-center gap-2 md:gap-8 text-sm">
              <a className="dark:text-white hover:text-primary font-medium" href="#projects">Projects</a>
              <a className="dark:text-white hover:text-primary font-medium" href="#skills">Skills</a>
              <a className="dark:text-white hover:text-primary font-medium" href="#about">About</a>
              <a className="dark:text-white hover:text-primary font-medium" href="mailto:diego_lpz29@hotmail.com">Contact</a>
            </nav>
            
            <button className='w-6 h-6 cursor-pointer' 
              onClick={toggleTheme}>
              {isDark ? moonIcon : sunIcon}
            </button>
          
          </div>
        </div>
      </div>
    </header>
  );
};