import styles from "./styles/Content.module.css";

function PlaceSuggest({ data }) {
  if (!data || data.length === 0) 
    return null;
   const placeArray = data;
  return (
    <>
      <div className={styles.list1}>
        <img src={placeArray[0].pic} alt={placeArray[0].place} />
        <span className={styles.detail}>
                <p>{placeArray[0].place}</p>
                <p>{placeArray[0].pack}</p>
        </span>
      </div>
      <div className={styles.list2}>
        {placeArray.slice(1).map((place, i) => (
          <span className={styles.places} key={i}>
            <img src={place.pic} alt={place.place} />
            <span className={styles.detail}>
                <p>{place.place}</p>
                <p>{place.pack}</p>
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

export default PlaceSuggest;
