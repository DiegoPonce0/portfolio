import {useDarkMode} from '../hooks/useDarkMode';


export function Header() {
  
  const {isDark, toggleTheme} = useDarkMode();
  
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
     px-4  
     py-3">
      <div className="flex flex-wrap items-center gap-4 text-white w-full">
        <div className="text-lg font-bold">
          <h2 className="logo">Diego Ponce</h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 ml-auto">
          <nav className="flex flex-wrap items-center gap-9 text-sm">
            <a className="hover:text-primary font-medium" href="#about">About</a>
            <a className="hover:text-primary font-medium" href="#skills">Skills</a>
            <a className="hover:text-primary font-medium" href="#projects">Projects</a>
            <a className="hover:text-primary font-medium" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className='flex cursor-pointer items-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark' 
            onClick={toggleTheme}>
              {isDark ? "🌙 Dark" : "☀️ Light"}
            </button>
            <a className="flex items-center h-10 px-4 bg-primary hover:bg-primary-dark rounded-lg text-white font-bold">
              Download Resume
              <svg
                className="downloadIcon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};