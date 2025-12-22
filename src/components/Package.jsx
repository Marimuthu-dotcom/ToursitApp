import styles from "./styles/Content.module.css"
function Package({ cards, startIndex, itemsPerPage }){
    return(
        <div className={styles.list}>
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
          </div>
        ))}
        </div>
    );
}
export default Package