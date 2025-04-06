import styles from "../main.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.fragment}>
          <div className={styles.projectlist}>
            <div className={styles.content}>
              <h1>Projects</h1>
            </div>
            <div className={styles.stripe}>
              <div className={styles.content}>
                <div className={styles.projectEntry}>
                  <div
                    className={styles.background}
                    style={{ backgroundImage: "url(../Images/WebsitePic.png)" }}
                  ></div>
                  <div className={styles.details}>
                    <span className={styles.date}>10-23-2023</span>
                    <h2>
                      <a>eborg.com</a>
                    </h2>
                    <div className={styles.descriptio}>This site</div>
                    <div className={styles.clear}>&nbsp;</div>
                  </div>
                  <a className={styles.clickOverlay} href="/projects/website">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.stripe}>
              <div className={styles.content}>
                <div className={styles.projectEntry}>
                  <div
                    className={styles.background}
                    style={{ backgroundImage: " url(../Images/TodoList.jpg)" }}
                  ></div>
                  <div className={styles.details}>
                    <span className={styles.date}>10-6-2023</span>
                    <h2>
                      <a>Todo List</a>
                    </h2>
                    <div className={styles.description}>
                      Todo List using the PERN stack
                    </div>
                    <div className={styles.clear}>&nbsp;</div>
                  </div>
                  <a className={styles.clickOverlay} href="/projects/todo-list">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.stripe}>
              <div className={styles.content}>
                <div className={styles.projectEntry}>
                  <div
                    className={styles.background}
                    style={{ backgroundImage: " url(../Images/textgame.jpg)" }}
                  ></div>
                  <div className={styles.details}>
                    <span className={styles.date}>12-6-2022</span>
                    <h2>
                      <a>Text Based Game</a>
                    </h2>
                    <div className={styles.description}>
                      Text based game using python socket API
                    </div>
                    <div className={styles.clear}>&nbsp;</div>
                  </div>
                  <a className={styles.clickOverlay} href="#">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
