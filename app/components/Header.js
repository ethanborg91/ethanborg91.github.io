import styles from "../main.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>Ethan Borg</div>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="about.html">About Me</a>
      </div>
    </div>
  );
}
