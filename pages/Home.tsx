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
      <header className={styles.header}>
        <div className={styles.container}>
          <h2 className={styles.logo}>Diego Ponce</h2>
          <nav className={styles.nav}>
            <a className={styles.navLink} href="#about" rel="noopener noreferrer">About</a>
            <a className={styles.navLink} href="#skills" rel="noopener noreferrer">Skills</a>
            <a className={styles.navLink} href="#projects" rel="noopener noreferrer">Projects</a>
            <a className={styles.navLink} href="#contact" rel="noopener noreferrer">Contact</a>
            <a className={styles.resumeBtn} href="#resume" rel="noopener noreferrer">Download Resume</a>
          </nav>
        </div>
      </header>

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

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2024 Diego Ponce. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a className={styles.footerLink} href="https://www.linkedin.com/in/diego-ponce-9b1b4a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className={styles.footerLink} href="https://github.com/diego-ponce" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </>

  )
}
