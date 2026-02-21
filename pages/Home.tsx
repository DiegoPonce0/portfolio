

import { Experience } from '../components/Experience.tsx'
import { Projects } from '../components/Projects.tsx';
import { Skills } from '../components/Skills.tsx';

import styles from './Home.module.css';

export const Home = () => {
  const experiences = [
        {
          title: 'Web Developer',
          company: 'Bind Marketing',
          date: 'September 2024 to November 2025',
          description: 'Developed and optimized WordPress pages, implementing technical SEO best practices, Core Web Vitals improvements, and performance enhancements. Collaborated with design and engineering teams to launch high-converting landing pages. increasing conversions by 15% and organic traffic by 25%, while integrating analytics and tracking systems for data-driven optimization.',
        },
        {
          title: 'Web Developer',
          company: 'Dumroom Media',
          date: 'September 2024 to November 2025',
          description: 'Developed and optimized websites using HTML5, CSS3, JavaScript, PHP, and WordPress/WooCommerce, improving site speed by 30% through performance optimization. Built custom features with React and Node.js, modernized deployment workflows via cloud hosting and Git (reducing downtime by 90%), and implemented SEO-driven landing strategies that increased CTR by 22%.',
        },
        {
          title: 'Web Developer',
          company: 'Dificonsa',
          date: 'September 2024 to November 2025',
          description: 'Designed and maintained corporate web applications using React, Bootstrap, and PHP, delivering fully responsive user experiences. Implemented CI/CD pipelines with GitHub Actions and Docker to streamline deployments and reduce errors. Executed technical SEO strategies achieving top 3 Google rankings for 12+ industry keywords (+50% organic traffic), while resolving WordPress/WooCommerce performance issues to improve load times and site reliability. Collaborated with marketing teams to align development efforts with lead generation goals.',
        }
      ];

    const projects = [
        {
          img: './dashboard.webp',
          title: 'Marketing Dashboard',
          description: 'React dashboard with authentication powered by Supabase (PostgreSQL backend), deployed on Vercel.',
          technology: 'React, Node.js, Express, PostgreSQL',
          result: 'Results: TODO',
          link: '#'
        },
        {
            img: './job-board.webp',
            title: 'Developer Job Board Platform',
            description: 'Full-stack job marketplace with custom API, authentication, and advanced filtering.',
            technology: 'React, Node.js, Express, PostgreSQL',
            result: 'Results: TODO',
            link: '#'
        },
        {
          img: './dental.webp',
          title: 'Dental Clinic Website',
          description: 'Custom WordPress site built with Avada and ACF for a modern dental practice.',
          technology: 'Wordpress, Avada Theme, ACF, CPTs',
          result: 'Results: TODO',
          link: '#'
        },
        {
            img: './tarot.webp',
            title: 'Booking & Payment System for Tarot Services',
            description: 'WordPress-based platform for online session scheduling and secure payments.',
            technology: 'Wordpress, Custom Plugin Development',
            result: 'Results: TODO',
            link: '#'
        },
        {
            img: './snack.webp',
            title: 'Healthy Snack E-commerce Website',
            description: 'Custom WordPress store with WooCommerce integration, featuring product catalog, cart, and secure checkout.',
            technology: 'Wordpress, Woocommerce',
            result: 'Results: TODO',
            link: '#'
        },
        {
            img: './steelwise.webp',
            title: 'WordPress Development & Technical SEO',
            description: 'WordPress development and technical SEO improvements to enhance performance, visibility, and search rankings.',
            technology: 'Wordpress, Elementor, Technical SEO',
            result: 'Results: TODO',
            link: '#'
        },
        {
            img: './bocatomates.webp',
            title: 'Real Estate Development Landing Page',
            description: '//TODO',
            technology: 'Wordpress, Gutenberg',
            result: 'TODO',
            link: '#'
        },
        {
            img: './printing.webp',
            title: 'Printing Company Website',
            description: 'Custom WordPress site built with Gutenberg and ACF for a modern printing company.',
          technology: 'Wordpress, Gutenberg, ACF, CPTs',
          result: 'Results: TODO',
          link: '#'
        },
        {
            img: './dificonsa.webp',
            title: 'Construction Company Website',
            description: '//TODO',
            technology: 'Wordpress, Custom Theme Development',
            result: 'TODO',
            link: '#'
        },
        {
            img: './cacao.webp',
            title: 'Chocolate E-commerce Website',
            description: '//TODO',
            technology: 'Shopify',
            result: 'TODO',
            link: '#'
        },
        {
            img: './video-agency.webp',
            title: 'Video Agency Website',
            description: '//TODO',
            technology: 'Wordpress, Elementor, ACF, CPTs',
            result: 'TODO',
            link: '#'
        },
        {
            img: './comingsoon.webp',
            title: 'Coming Soon',
            description: '//TODO',
            technology: 'TODO',
            result: 'TODO',
            link: '#'
        }
      ];

      const skills = [
        {
          title: 'Frontend',
          description: 'React, Astro, Tailwind, HTML, CSS, JavaScript, Figma'
        },
        {
            title: 'Backend',
          description: 'Node.js, Express, PostgreSQL, GraphQl, REST API'
        },
        {
          title: 'CMS',
          description: 'Headless WordPress ACF CPTs, Shopify, Woocommerce'
        },
        {
          title: 'Tools',
          description: 'Git, Docker, VS Code, AWS, CI/CD'
        }
      ];

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
              {experiences.map((exp, index) => (
                <Experience
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  date={exp.date}
                  description={exp.description}
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
            <p>//TODO</p>
          </div>
        </section>

        <section className={styles.skills}>
          <div className={styles.container}>
            <h2>Skills</h2>
            <div className={styles.projectsList}>
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
