import TopBar from "../components/TopBar";
import styles from "../components/styles/Home.module.css"
function Home(){
   return(
    <>
      <div className={styles.Home}>
        <div className={styles.innerHome}>
            <TopBar />
        </div>
      </div>
    </>
   );
}
export default Home;