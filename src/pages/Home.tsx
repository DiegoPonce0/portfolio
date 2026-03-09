import { experiences } from '../data/expirences.ts';
import { projects } from '../data/projects.ts';
import { skills } from '../data/skills.ts';

import { Experience } from '../components/Experience.tsx'
import { Projects } from '../components/Projects.tsx';
import { Skills } from '../components/Skills.tsx';


export const Home = () => {

  const locationIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      >
      <use href={`/sprite.svg#location`} />
    </svg>
  );

  const codeIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 fill-current"
      >
      <use href={`/sprite.svg#code`} />
    </svg>
  );

  const caseIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 fill-current"
      >
      <use href={`/sprite.svg#case`} />
    </svg>
  )

  const userIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 fill-current"
      >
      <use href={`/sprite.svg#user`} />
    </svg>
  )

  const terminalIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 fill-current"
      >
      <use href={`/sprite.svg#terminal`} />
    </svg>
  )

  const linkedinIcon = (
     <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      >
      <use href={`/sprite.svg#linkedin`} />
      </svg>
  )


  return (
    <>
      <main className='bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden antialiased'>
        <section className="bg-white dark:bg-background-dark min-h-[70dvh] flex items-center">
          <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16 lg:px-12">
            <div className="py-2 flex items-center gap-3">
              
              <img src="./profile.webp" alt="Diego Ponce" className="rounded-full size-12 sm:size-16 object-cover" />
              
              <span className="inline-flex items-center gap-2 dark:bg-background-dark border text-xs sm:text-sm border-green-400 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300">
                
                <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Open to work
              
              </span>
              <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                {locationIcon}
                <span>Vancouver, BC</span>
              </div>
            </div>
            <h1 className="py-4 text-4xl font-bold">Hey, I'm Diego Ponce</h1>
            <h2 className="text-2xl mb-6">
              Full-stack web developer specializing in React, Astro, Node.js, Open to local, hybrid, and remote roles.
            </h2>
            <div className="flex gap-4 font-bold">
              <a
                href="mailto:diego_lpz29@hotmail.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Contact Me
              </a>
              <a 
                href='https://www.linkedin.com/in/diego-ponce-712991217/'
                className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-200 dark:text-white dark:hover:text-black px-4 py-2 rounded-md shadow-sm border dark:border-white cursor-pointer inline-flex items-center whitespace-nowrap gap-2">{linkedinIcon} LinkedIn </a>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white dark:bg-background-dark py-8">
          <div className="max-w-5xl mx-auto px-6">
            
            <h2 className='flex items-center gap-2 text-3xl font-bold py-2 px-2 mb-10'>
              {caseIcon} 
              <span>Work Experience</span>
              </h2>
            
            <div className="relative">
              
              <div className="absolute left-13 md:left-[68px] top-6 h-full w-px -translate-x-1/2 bg-slate-700 z-10" />
              
              <div className="p-8">
                {experiences.map((experience, index) => (
                  <Experience
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    date={experience.date}
                    description={experience.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-8 bg-white dark:bg-background-dark py-8">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className='flex items-center gap-2 text-3xl font-bold py-2 px-2 mb-10'>
              {codeIcon}
              <span>Projects</span>
            </h2>
            <div className="flex flex-col gap-6 p-6 justify-center">
              {projects.map((project, index) => (
                <Projects
                  key={index}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  technology={project.technology}
                  result={project.result}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>


        <section id="skills" className="bg-white dark:bg-background-dark py-8">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className='flex items-center gap-2 text-3xl font-bold py-2 px-2 mb-10'>{terminalIcon}Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
              {skills.map((skill, index) => (
                  <Skills
                    key={index}
                    title={skill.title}
                    icons={skill.icons} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 bg-white dark:bg-background-dark">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className='flex items-center gap-2 text-3xl font-bold py-2 px-2 mb-10'>{userIcon} 
                <span>About Me</span>
                </h2>
              <p className='md:text-justify'>I’m a Full-Stack Web Developer focused on building high-performance, scalable web applications. I work across modern JavaScript stacks (React, Node.js) and WordPress ecosystems, combining clean architecture with SEO and performance optimization.

                I’ve developed e-commerce platforms, job marketplaces, and custom dashboards, consistently improving load times, search visibility, and conversion rates. I’m passionate about creating solutions that are both technically solid and business-driven.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
