import { useState } from "react";
import Logo from "../assets/1.jpg"
import styles from "./styles/TopBar.module.css"
function TopBar(){
    return(
        <>
          <div className={styles.main}>
            <div>
            <img className={styles.image} src={Logo} />
            </div>
            <div></div>
          </div>
        </>
        );
}
export default TopBar;