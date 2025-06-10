import styles from "./projects.module.css";

function ProjectCard({ link, date, title, description, bgClass }) {
  return (
    <article className={styles.projectCard}>
      <div className={`${styles.background} ${bgClass}`} />
      <div className={styles.details}>
        <time className={styles.date}>{date}</time>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <a
        className={styles.clickOverlay}
        href={link}
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
      />
    </article>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>

      <ProjectCard
        link="https://github.com/ethanborg91/ethanborg91.github.io"
        date="Ongoing"
        title="ethanborg91.github.io"
        description="This site"
        bgClass={styles.websitePic}
      />

      <ProjectCard
        link="https://github.com/ethanborg91/gitmetrics"
        date="In Progress"
        title="GitMetrics"
        description="Platform that monitors your Git datas and presents valuable analytics"
        bgClass={styles.graphPic}
      />

      <ProjectCard
        link="https://github.com/ethanborg91/pern-app"
        date="Oct 2023"
        title="Todo List"
        description="Todo list built with the PERN stack"
        bgClass={styles.todoPic}
      />

      <ProjectCard
        link="https://github.com/ethanborg91/Game-Client-Application"
        date="Dec 2022"
        title="Text-Based Game"
        description="Text-based game using Python sockets"
        bgClass={styles.textGamePic}
      />
    </section>
  );
}
