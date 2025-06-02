"use client";

import { useState } from "react";
import styles from "./main.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./projects/projects";
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

  const [activeTab, setActiveTab] = useState("work");

  const workContent = (
    <div className={styles.experienceContent}>
      <div>
        <ul className={styles.row}>
          <li className={styles.rowContent}>
            <span className={styles.imageContainer}>
              <img className={styles.rowImage} src="Images/Purchs-Image.jpg" />
            </span>
            <div className={styles.rowDetails}>
              <time>Jul 2024 - Present</time>
              <h2>Purchs</h2>
              <p>Software Engineer</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.row}>
          <li className={styles.rowContent}>
            <span className={styles.imageContainer}>
              <img
                className={styles.rowImage}
                src="Images/ivey_business_school_logo.jpg"
              />
            </span>
            <div className={styles.rowDetails}>
              <time>Sep 2023 - Apr 2024</time>
              <h2>Ivey Business School at Western University</h2>
              <p>Research Assistant</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const educationContent = (
    <div className={styles.experienceContent}>
      <div>
        <ul className={styles.row}>
          <li className={styles.rowContent}>
            <span className={styles.imageContainer}>
              <img
                className={styles.rowImage}
                src="Images/westernuniversity_logo.jpg"
              />
            </span>
            <div className={styles.rowDetails}>
              <time>Sep 2020 - Apr 2024</time>
              <h2>University of Western Ontario</h2>
              <p>
                Bachelor of Science (BSc), Honours Specialization In Computer
                Science
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const skills = [
    "JavaScript",
    "React",
    "Next.JS",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "MongoDB",
    "GCP",
    "Figma",
    "Agile",
    "Jira",
    "PostgreSQL",
    "Git",
    "REST APIs",
  ];

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
                <FaMapMarkerAlt size={20} />
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
            <div className={styles.experience}>
              <div>
                <div className={styles.experienceTabs}>
                  <button
                    className={activeTab === "work" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("work")}
                  >
                    Work
                  </button>
                  <button
                    className={
                      activeTab === "education" ? styles.activeTab : ""
                    }
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </button>
                </div>
                <div>
                  {activeTab === "work" ? workContent : educationContent}
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <span>Skills</span>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.eachSkill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
