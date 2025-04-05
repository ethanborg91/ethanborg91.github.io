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
              <h2>eborg.com (currently ethanborg91.github.io)</h2>
              <div className={styles.section}>
                <p>
                  Personal website for my projects and life to be displayed!
                  <br />
                  First attempt at using HTML and CSS, I think it went pretty
                  well. Hoping to continuously update the site as time
                  progresses.
                  <br />
                  Thanks for stopping by!
                </p>
              </div>
              <h4>See it in action</h4>
              <div className={styles.section}>You're on it right now!!!</div>
              <h4>Source Code</h4>
              <div className={styles.section}>
                <a href="https://github.com/ethanborg91/ethanborg91.github.io">
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
