"use client";

import styles from "./main.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  FaMapMarkerAlt,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Images/Ethan Borg Resume.pdf";
    link.download = "Ethan Borg Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h2>Ethan Borg</h2>
              <h3>
                Software Engineer
                <br />
                Computer Geek
              </h3>
              <div className={styles.location}>
                <FaMapMarkerAlt />
                <p>Ontario, Canada</p>
              </div>
              <div className={styles.links}>
                <button onClick={downloadResume}>
                  <FaDownload />
                  <span>Resume</span>
                </button>
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
