import styles from "./styles/Content.module.css";

function PlaceList({city,list,boxPerPage}) {
  if (!city || city.length === 0) 
    return null;

  return (
    <div className={styles.list}>
      {city.slice(list, list + boxPerPage).map((item, i) => (

        <div className={styles.tours} key={i}>
          <span className={styles.images}>
            <img src={item.book} alt={item.countries} />
          </span>
          <span className={styles.details}>
            <p style={{ color: "rgb(141,138,138)", fontWeight: "500" }}>
              {item.Pack}
            </p>
            <p>{item.countries}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default PlaceList;

