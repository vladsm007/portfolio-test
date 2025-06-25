// src/app/about/page.tsx
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <section className={styles.bio}>
        <h2>Bio</h2>
        <p>
          [A brief introduction about the developer, their passion for coding,
          years of experience, and what drives them. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
        </p>
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1 (e.g., JavaScript, React)</li>
          <li>Skill 2 (e.g., Node.js, Next.js)</li>
          <li>Skill 3 (e.g., Python, Django)</li>
          <li>Skill 4 (e.g., HTML, CSS, CSS Modules)</li>
          <li>Skill 5 (e.g., Database Management - SQL, NoSQL)</li>
          <li>Skill 6 (e.g., Git, Docker)</li>
        </ul>
      </section>
    </div>
  );
}
