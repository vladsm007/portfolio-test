import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>[Developer Name]</h1>
      <p className={styles.title}>[Developer Title / Role]</p>
      <p>Welcome to my personal portfolio. Explore my work and get to know me better.</p>
    </main>
  );
}
