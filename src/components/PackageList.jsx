import styles from "./styles/Content.module.css";
function PackageList({data}){
if (!data || data.length === 0) 
    return null;
return(
    <>
    {data.map((item,i)=>(
    <div className={styles.card} key={i}>
       <span  className={styles.pic}><img src={item.pic} alt="" /></span>
             <span className={styles.location}>
                <span className={styles.name}>{item.name}</span>
             <span className={styles.time}>{item.time}</span>
       </span>
    </div>))}
    </>
  );
}
export default PackageList;