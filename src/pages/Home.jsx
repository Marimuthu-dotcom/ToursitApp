import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import styles from "../components/styles/Home.module.css";

function Home({ animateIn = true }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (animateIn) {
      requestAnimationFrame(() => {
        setShow(true);
      });
    }
  }, [animateIn]);

  return (
    <div className={styles.home}>
      <div className={`${styles.innerHome} ${show ? styles.show : ""}`}>
        <TopBar />
        <BottomBar />
      </div>
    </div>
  );
}

export default Home;
