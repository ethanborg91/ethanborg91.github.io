import styles from "./components.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>©2022-2025 Ethan Borg, all rights reserved.</p>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/ethan-borg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ethanborg91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
