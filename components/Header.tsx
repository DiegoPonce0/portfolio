import styles from './Header.module.css';

export function Header() {
  return (
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
    );
};