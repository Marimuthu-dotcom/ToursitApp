import styles from "./styles/Content.module.css"
function Package({ cards, startIndex, itemsPerPage,animate }){
    return(
        <div className={`${styles.list} ${animate?styles.slideFade:""}`}>
            {cards
        .slice(startIndex, startIndex + itemsPerPage)
        .map((item, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.itemContent1}>
              <span>
                <p>
                  {item.title} <mark>{item.packages}</mark>
                </p>
              </span>
              <span>
                <img src={item.icon} alt={item.title} />
              </span>
            </div>
            <div className={styles.images}>
                <img src={item.pics}/>
            </div>
          </div>
        ))}
        </div>
    );
}
export default Package

