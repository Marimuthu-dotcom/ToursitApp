import { useState } from "react";
import Logo from "../assets/1.jpg"
import styles from "./styles/TopBar.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
function TopBar(){
    return(
        <>
        <header>
          <nav>
          <div className={styles.main}>
            <div className={styles.image}>
            <img className={styles.image1} src={Logo} />
            </div>
            <div className={styles.menu}>
              <ul>
                <li role="button"
  tabIndex="0">Destinations<span><MdKeyboardArrowDown /></span></li>
                <li role="button"
  tabIndex="0">Holidays Ideas<span><MdKeyboardArrowDown /></span></li>
                <li role="button"
  tabIndex="0">Packages<span><MdKeyboardArrowDown /></span></li>
                <li role="button"
  tabIndex="0">Places to Stay<span><MdKeyboardArrowDown /></span></li>
                <li role="button"
  tabIndex="0">Weekend GateWay<span><MdKeyboardArrowDown /></span></li>
              </ul>
              </div>
            <div className={styles.user}>
              <ul>
                <li><span role="button"
                  tabIndex={0}><FaFacebook /></span></li>
                <li><span role="button"
                 tabIndex={0}><FaInstagram /></span></li>
                <li><span role="button"
                 tabIndex={0}><FaYoutube /></span></li>
                <li><span role="button"
                 tabIndex={0}><FaGoogle /></span></li>
                <button type="button" className={styles.btn}>Sign Up</button>
              </ul>
            </div>
          </div>
          </nav>
          </header>
        </>
        );
}
export default TopBar;