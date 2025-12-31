import styles from "./styles/Content.module.css";
import Package from "./Package";
import PlaceSuggest from "./PlaceSuggest";
import PlaceList from "./PlaceList";
import { useState,useEffect } from "react";
function Content() {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
    const [activeIndex,setActiveIndex]=useState(0);
    const [cards, setCards] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [places,setPlaces]=useState([]);
    const [country,setCountry]=useState([]);
    const [list,setList]=useState(0);
    const itemsPerPage = 3;
    const boxPerPage=5;
    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data =>{setImages(data.images)
                          setCards(data.card)
                          setPlaces(data.places)
                          setCountry(data.country)
                        });
    }, []);
    useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNext=()=>{
     if(startIndex+itemsPerPage<cards.length){
        setStartIndex(startIndex+itemsPerPage);
     }
  }
  const handlePrev=()=>{
    if(startIndex-itemsPerPage>=0){
       setStartIndex(startIndex-itemsPerPage);
    }
  }
  const NextFive=()=>{
     if(list+boxPerPage<country.length){
        setList(list+boxPerPage);
     }
  }
  const PrevFive=()=>{
    if(list-boxPerPage>=0){
       setList(list-boxPerPage);
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
                        <div className={styles.var1} role="button" onClick={handlePrev}><i className="bi bi-arrow-left-circle-fill"></i></div>
                        <div className={styles.var2}><Package cards={cards}  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}/></div>
                        <div className={styles.var3} role="button" onClick={handleNext}><i className="bi bi-arrow-right-circle-fill"></i></div>
                    </section>
                </div>
            </div>
            <div className={styles.container2}>
                    <section className={styles.Boxs1}>
                       <div className={styles.region}>
                         <div className={styles.name}>
                             <h1 className={styles.h1}>Explore Top Destinations by Region</h1>
                         </div>
                         <div className={styles.loca}>
                            <div className={styles.direct}>
                                <div className={styles.d4}>
                                 {["North India", "South India", "East India", "West India"].map(
                                 (region, i) => (
                                  <span
                                        key={i}
                                        role="button"
                                        tabIndex={0}
                                        className={activeIndex === i ? styles.active : ""}
                                        onClick={() => setActiveIndex(i)}
                                        >
                                        {region}
                                </span>)
                                )} 
                                </div>
                            </div>
                            <div className={styles.img}>
                                <div className={styles.list}>
                                     {places.length > 0 && places[activeIndex] && (
                                        <PlaceSuggest
                                        data={Object.values(places[activeIndex])[0]}
                                    />
                                    )}
                                 </div>
                            </div>
                         </div>
                     </div>
                    </section>
                    <section className={styles.Boxs2}>
                       <div className={styles.region}>
                         <div className={styles.names}>
                             <h1 className={styles.h1}>Top Trending Destinations</h1>
                             <h3 className={styles.h3}>View All Tours <i className="bi bi-caret-right-fill"></i></h3>
                         </div>
                         <div className={styles.loca2}>
                             <div className={styles.places}>
                                     <PlaceList city={country} list={list} boxPerPage={boxPerPage}/>
                            </div>  
                            <div className={styles.pages}>
                                <span className={styles.btns}>
                                    <i className="bi bi-arrow-left-circle-fill"
                                    role="button"
                                    tabIndex={0}
                                    onClick={PrevFive}
                                    ></i>
                                    <i className="bi bi-arrow-right-circle-fill"
                                    role="button"
                                    tabIndex={0}
                                    onClick={NextFive}
                                    ></i>
                                </span>
                            </div>  
                       </div>
                     </div>
                    </section>
                    <section className={styles.Boxs3}>
                       <p>mari</p>
                    </section>
            </div>
        </article>
        </main>
    );
}
export default Content;

