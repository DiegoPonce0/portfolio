import { experiences } from '../src/data/expirences.ts';
import { projects } from '../src/data/projects.ts';
import { skills } from '../src/data/skills.ts';

import { Experience } from '../components/Experience.tsx'
import { Projects } from '../components/Projects.tsx';
import { Skills } from '../components/Skills.tsx';

import styles from './Home.module.css';

export const Home = () => {

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroInfo}>
              <span className={styles.heroTag}>Open to work</span>
              <span className={styles.heroTag}>Vancouver, BC</span>
            </div>
            <h1 className={styles.heroTitle}>Hey, I'm Diego Ponce</h1>
            <h2 className={styles.heroSubtitle}>
              Full-stack web developer specializing in React, Astro, Node.js, Open to local, hybrid, and remote roles.
            </h2>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>View Projects</button>
              <button className={styles.btnSecondary}>Contact Me</button>
            </div>
          </div>
        </section>

        <section className={styles.workExperience}>
          <div className={styles.container}>
            <h2>Work Experience</h2>
            <div className={styles.experienceList}>
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

        <section className={styles.projects}>
          <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.projectsList}>
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

        <section className={styles.aboutMe}>
          <div className={styles.container}>
            <h2>About Me</h2>
            <p>I’m a Full-Stack Web Developer focused on building high-performance, scalable web applications. I work across modern JavaScript stacks (React, Node.js) and WordPress ecosystems, combining clean architecture with SEO and performance optimization.

              I’ve developed e-commerce platforms, job marketplaces, and custom dashboards, consistently improving load times, search visibility, and conversion rates. I’m passionate about creating solutions that are both technically solid and business-driven.</p>
            <img src="./profile.webp" alt="Diego Ponce" className={styles.profileImage} />
          </div>
        </section>

        <section className={styles.skills}>
          <div className={styles.container}>
            <h2>Skills</h2>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div className={styles.skillsGroup} >
                  <Skills
                    key={index}
                    title={skill.title}
                    description={skill.description} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contactMe}>
          <div className={styles.container}>
            <h2>Contact Me</h2>
            <p>Email: diego_lpz29@hotmail.com</p>
            <p>Phone: +1 (236) 989-4994</p>
          </div>
        </section>
      </main>
    </>
  )
}
