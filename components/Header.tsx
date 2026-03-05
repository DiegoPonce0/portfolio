import {useDarkMode} from '../hooks/useDarkMode';


export function Header() {
  const {isDark, toggleTheme} = useDarkMode();

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
      className="w-10 h-10 fill-current text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200">
      <use href={`/sprite.svg#sun`} />
    </svg>
  );

  
  return (
    <header className="
    sticky
    top-0 
    z-50 
    flex 
    flex-wrap
    items-center 
    justify-between 
    border-b 
    border-solid
     border-b-border-dark
     bg-background-dark/95 
     backdrop-blur-sm
     px-2 
     md:px-16  
     md:py-4">
      <div className="flex flex-wrap items-center gap-1 md:gap-4 text-white w-full">
        <div className="text-lg font-bold">
          <h2 className="logo">Diego Ponce</h2>
        </div>
        <div className="flex flex-wrap items-center gap-1 md:gap-4 ml-auto">
          <nav className="flex flex-wrap items-center gap-3 md:gap-9 text-sm">
            <a className="hover:text-primary font-medium" href="#about">About</a>
            <a className="hover:text-primary font-medium" href="#skills">Skills</a>
            <a className="hover:text-primary font-medium" href="#projects">Projects</a>
            <a className="hover:text-primary font-medium" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4 overflow-hidden">
            <button className='hover:text-primary w-10 h-10' 
            onClick={toggleTheme}>
              {isDark ? moonIcon : sunIcon}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};