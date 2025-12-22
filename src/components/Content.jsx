import styles from "./styles/Content.module.css";
import Package from "./Package";
import { useState,useEffect } from "react";
function Content() {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    const [cards, setCards] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;
    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data =>{setImages(data.images)
                          setCards(data.card)});
    }, []);
    useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev=()=>{
     if(startIndex+itemsPerPage<cards.length){
        setStartIndex(startIndex+itemsPerPage);
     }
  }
  const handleNext=()=>{
    if(startIndex-itemsPerPage>=0){
       setStartIndex(startIndex-itemsPerPage);
    }
  }
    return(
        <main>
        <article className={styles.mainBox}>
            <div className={styles.container1}>
                <div className={styles.Box1}>
                    {images.map((img, i) => (
                        <img key={i} src={img.pic} alt={`Image ${i + 1}`} className={i === index ? styles.active : ""} />
                    ))}
                </div>
                <div className={styles.Box2}>
                    <section className={styles.intro}>
                        <h1 className={styles.head}>Let us Plan you a perfect <mark>India Holiday</mark></h1>
                        <p className={styles.para}>Tour My India, one of the best travel agencies in India, offers custom-crafted tour packages for unforgettable holiday experiences across the country.</p>
                    </section>
                    <section className={styles.varity}>
                        <div className={styles.var1} role="button" onClick={handleNext}><i class="bi bi-arrow-left-circle-fill"></i></div>
                        <div className={styles.var2}><Package cards={cards}  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}/></div>
                        <div className={styles.var3} role="button" onClick={handlePrev}><i class="bi bi-arrow-right-circle-fill"></i></div>
                    </section>
                </div>
            </div>
        </article>
        </main>
    );
}
export default Content;