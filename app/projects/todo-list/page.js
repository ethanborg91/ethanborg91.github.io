import styles from "../../main.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Website() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.fragment}>
          <div className={styles.stripe}>
            <div className={styles.content}>
              <h2>PERN Stack Todo List</h2>
              <div className={styles.section}>
                <p>
                  Todo List able to create, edit, and delete task.
                  <br />
                  Used the PERN stack (PostgreSQL, Express.js, React.js,
                  Node.js) to create this app.
                  <br />
                  Thanks for checking it out!
                </p>
              </div>
              <h4>See it in action</h4>
              <div className={styles.section}>I WILL DO THIS SOON!</div>
              <h4>Source Code</h4>
              <div className={styles.section}>
                <a href="https://github.com/ethanborg91/pern-app">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
