import { experiences } from '../src/data/expirences.ts';
import { projects } from '../src/data/projects.ts';
import { skills } from '../src/data/skills.ts';

import { Experience } from '../components/Experience.tsx'
import { Projects } from '../components/Projects.tsx';
import { Skills } from '../components/Skills.tsx';


export const Home = () => {

  return (
    <>
      <main className='bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden antialiased'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <div className="py-2">
              <span className="bg-background-dark border-2 border-blue-400 rounded-full px-2 py-1 text-blue-400">Open to work</span>
              <span className="px-4">Vancouver, BC</span>
            </div>
            <h1 className="py-4 text-4xl">Hey, I'm Diego Ponce</h1>
            <h2 className="text-2xl mb-6">
              Full-stack web developer specializing in React, Astro, Node.js, Open to local, hybrid, and remote roles.
            </h2>
            <div className="space-x-4 font-bold">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Projects</button>
              <button className="bg-background-dark hover:bg-gray-800 text-white px-4 py-2 rounded-md border-2 border-blue-400">Contact Me</button>
            </div>
          </div>
        </section>

        <section className="workExperience">
          <div className="container">
            <h2 className='text-2xl font-bold py-2 px-2'>Work Experience</h2>
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
        </section>

        <section className="projects">
          <div className="container">
            <h2 className='text-4xl pl-2'>Projects</h2>
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

        <section className="px-4 py-8 bg-white dark:bg-background-dark">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col">
              <h2 className='text-2xl font-bold pb-2'>About Me</h2>
              <p>I’m a Full-Stack Web Developer focused on building high-performance, scalable web applications. I work across modern JavaScript stacks (React, Node.js) and WordPress ecosystems, combining clean architecture with SEO and performance optimization.

                I’ve developed e-commerce platforms, job marketplaces, and custom dashboards, consistently improving load times, search visibility, and conversion rates. I’m passionate about creating solutions that are both technically solid and business-driven.</p>
            </div>
            <img src="./profile.webp" alt="Diego Ponce" className="rounded-full w-48 h-48 object-cover mx-auto" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className='text-2xl font-bold px-2 py-2'>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
              {skills.map((skill, index) => (
                  <Skills
                    key={index}
                    title={skill.title}
                    description={skill.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 bg-background-light dark:bg-background-dark">
          <h2 className='text-2xl font-bold py-4 text-center'>Contact Me</h2>
          <div className="flex gap-4 justify-center">
            <p className='bg-blue-600 border border-green-50 p-2 rounded-full'>Email: diego_lpz29@hotmail.com</p>
            <p className='bg-emerald-600 border border-green-50 p-2 rounded-full'>Phone: +1 (236) 989-4994</p>
          </div>
        </section>
      </main>
    </>
  )
}
