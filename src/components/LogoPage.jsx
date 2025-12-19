import { useEffect, useState } from "react";
import styles from "./styles/LogoPage.module.css";
import Logo from "../assets/Logo.mp4";

function LogoPage({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo for 3s then fade out
    const timer = setTimeout(() => {
      setFadeOut(true); // trigger fade-out animation
      setTimeout(() => {
        onFinish(); // notify App to switch to Home
      }, 500); // wait for fade-out to finish (1s)
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.main} ${fadeOut ? styles.fadeOut : ""}`}>
      <video
        className={styles.logovideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Logo} type="video/mp4" />
      </video>
    </div>
  );
}

export default LogoPage;
