// src/app/projects/page.tsx
import styles from './projects.module.css';

// Placeholder data for projects
const placeholderProjects = [
  { id: 1, name: "Project Alpha", description: "A cool web application built with React and Node.js.", imageUrl: "https://via.placeholder.com/300x200?text=Project+Alpha" },
  { id: 2, name: "Project Beta", description: "An innovative mobile app changing the way we do things.", imageUrl: "https://via.placeholder.com/300x200?text=Project+Beta" },
  { id: 3, name: "Project Gamma", description: "A data science project with insightful visualizations.", imageUrl: "https://via.placeholder.com/300x200?text=Project+Gamma" },
];

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <p className={styles.intro}>Here are some of the projects I've worked on. Click to learn more!</p>
      <div className={styles.gallery}>
        {placeholderProjects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.imageUrl} alt={project.name} className={styles.projectImage} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* <a href={`/projects/${project.id}`} className={styles.detailsButton}>View Details</a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
