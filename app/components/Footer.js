import styles from "../components.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        ©2022-2025 Ethan Borg, all rights reserved.
      </div>
    </div>
  );
}
