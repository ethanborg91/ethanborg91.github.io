import styles from "./main.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.page}>
        <div className={styles.fragment}>
          <div className={styles.block}>
            <div className={styles.outerGradient}>
              <div className={styles.content}>
                <div className={styles.innerGradient}>
                  <div className={styles.introduction}>
                    <div>&nbsp;</div>
                    <div className={styles.opener}>Ethan Borg's Website</div>
                    <div className={styles.about}>
                      Hello! I am Ethan Borg, a fourth year computer science
                      student at The University of Western Ontario.
                      <br />
                      This is the personal website I have created for my work
                      portfolio and personal life.
                      <br />
                      This webiste is my first attempt at front-end development
                      and was created using HTML and CSS.
                      <br />
                      Thank you for visiting and taking the time to read about
                      me!
                    </div>
                    <div className={styles.links}>
                      <a href="/projects">Projects</a>
                      <a href="about.html">About Me</a>
                    </div>
                  </div>
                  <img
                    src="Images/ProfessionalPic.jpg"
                    className={styles.photoArea}
                  />
                  <div className={styles.clear}></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
