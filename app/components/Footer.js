import styles from "./components.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <hr className={styles.footerLine} />
      <div className={styles.content}>
        <p>© 2022-2025 Ethan Borg.</p>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/ethan-borg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/ethanborg91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
