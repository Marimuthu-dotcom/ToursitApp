import styles from "./styles/BottomBar.module.css"
import India from "../assets/india.jfif";
import World from "../assets/world.jfif";
import Wedding from "../assets/wedding.png";
function BottomBar(){
    return(
        <nav>
        <div style={{display:"none"}} className={styles.main}>
          <div className={styles.menu}>
            <div className={styles.menu1}>
            <span><img src={India}/></span>
            <span><img src={World} /></span>
            <span><img src={Wedding} /></span>
            </div>
            <div className={styles.menu2}>
               <section role="button"
  tabIndex="0"><i className="bi bi-telephone-fill"></i><p> +91-6381367415</p></section>
               <section role="button"
  tabIndex="0"><i className="bi bi-geo-alt-fill"></i><p> Plan Your Trip</p></section>
          </div>
          </div>
        </div>
        </nav>
    );
}
export default BottomBar;