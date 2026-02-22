import styles from './Footer.module.css';

export function Footer() {
  return (
      <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2024 Diego Ponce. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a className={styles.footerLink} href="https://www.linkedin.com/in/diego-ponce-9b1b4a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className={styles.footerLink} href="https://github.com/diego-ponce" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
      </footer>
    ); 
};