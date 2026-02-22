import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <h2 className={styles.logo}>Diego Ponce</h2>
        </div>

        <nav className={styles.nav}>
          <a className={styles.navLink} href="#about">About</a>
          <a className={styles.navLink} href="#skills">Skills</a>
          <a className={styles.navLink} href="#projects">Projects</a>
          <a className={styles.navLink} href="#contact">Contact</a>
        </nav>

        <div className={styles.actionArea}>
          <a className={styles.resumeBtn} href="#resume">
            Download Resume
            <svg
              className={styles.downloadIcon}
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
    </header>
  );
};