import styles from "./styles/Content.module.css";
import Package from "./Package";
import PlaceSuggest from "./PlaceSuggest";
import PlaceList from "./PlaceList";
import PackageList from "./PackageList";
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
    const [animatePkg,setAnimatePkg]=useState(true);
    const [animatePlace,setAnimatePlace]=useState(true);
    const [animateImg, setAnimateImg] = useState(true);
    const [packages,setPackages]=useState([]);
    const [activeBtn,setActiveBtn]=useState(0);
    const [animatePack,setAnimatePack]=useState(true);
    const itemsPerPage = 3;
    const boxPerPage=5;
    const packList=["WildLife","Hill Station","Temples","Heritage","Beach","Honeymoon","Adventure","Trekking"];
    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then(data =>{setImages(data.images)
                          setCards(data.card)
                          setPlaces(data.places)
                          setCountry(data.country)
                          setPackages(data.Packages);
                        });
    }, []);
    useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNext=(from)=>{
    if(from==="package"){
     if(startIndex+itemsPerPage<cards.length){
        setAnimatePkg(false);
        setTimeout(() => {
        setStartIndex(startIndex+itemsPerPage);
        setAnimatePkg(true);
        
  }, 300);
     }
  }
    if(from==="place"){
       if(list+boxPerPage<country.length){
        setAnimatePlace(false);
        setTimeout(() => {
        setList(list+boxPerPage);
        setAnimatePlace(true);
  },300);
     }
    }
}
  const handlePrev=(from)=>{
    if(from==="package"){
    if(startIndex-itemsPerPage>=0){
       setAnimatePkg(false);
       setTimeout(() => {
        setStartIndex(startIndex-itemsPerPage);
        setAnimatePkg(true);
        
  }, 300);
    }
  }
  if(from==="place"){
    if(list-boxPerPage>=0){
        setAnimatePlace(false);
       setTimeout(() => {
        setList(list - boxPerPage);
        setAnimatePlace(true);
  }, 300);
       
    }
  }
}
const handleRegionClick = (i) => {
  setAnimateImg(false);
  setTimeout(() => {
    setActiveIndex(i);
    setAnimateImg(true);
  }, 200);
};
 
const handlePackClick=(i)=>{
  setAnimatePack(false);
  setTimeout(()=>{
    setActiveBtn(i);
    setAnimatePack(true);
  },200);
};
  
    return(
        <main>
        <article className={styles.mainBox}>
            <div className={styles.container1}>
                <div className={styles.Box1}>
                    {images.map((img, i) => (
                        < img key={i} src={img.pic} alt={`Image ${i + 1}`} className={i === index ? styles.active : ""} />
                    ))}
                </div>
                <div className={styles.Box2}>
                    <section className={styles.intro}>
                        <h1 className={styles.head}>Let us Plan you a perfect <mark>India Holiday</mark></h1>
                        <p className={styles.para}>Tour My India, one of the best travel agencies in India, offers custom-crafted tour packages for unforgettable holiday experiences across the country.</p>
                    </section>
                    <section className={styles.varity}>
                        <div className={styles.var1} role="button" onClick={()=>handlePrev("package")}><i className="bi bi-arrow-left-circle-fill"></i></div>
                        <div className={styles.var2}><Package cards={cards}  startIndex={startIndex}
                  itemsPerPage={itemsPerPage} animate={animatePkg}/></div>
                        <div className={styles.var3} role="button" onClick={()=>handleNext("package")}><i className="bi bi-arrow-right-circle-fill"></i></div>
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
                                        onClick={()=>handleRegionClick(i)}
                                        >
                                        {region}
                                </span>)
                                )} 
                                </div>
                            </div>
                            <div style={{padding:"10px"}} className={`${styles.img} ${animateImg ?styles.slideFade:""}`}>
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
                                     <PlaceList city={country} list={list} boxPerPage={boxPerPage} animate={animatePlace}/>
                            </div>  
                            <div className={styles.pages}>
                                <span className={styles.btns}>
                                    <i className="bi bi-arrow-left-circle-fill"
                                    role="button"
                                    tabIndex={0}
                                    onClick={()=>handlePrev("place")}
                                    ></i>
                                    <i className="bi bi-arrow-right-circle-fill"
                                    role="button"
                                    tabIndex={0}
                                    onClick={()=>handleNext("place")}
                                    ></i>
                                </span>
                            </div>  
                       </div>
                     </div>
                    </section>
                    <section className={styles.Boxs3}>
                       <div className={styles.region}>
                          <div className={styles.title}>
                            <span className={styles.span1}><h1 className={styles.h1}>Packages By Interest</h1></span>
                            <span className={styles.span2}>
                                {packList.map((pack,i)=>(
                                 <button className={`${styles.packName}  ${activeBtn===i?styles.activebtn:""}`} key={i} onClick={()=>handlePackClick(i)}>
                                     {pack}
                                 </button>))
                                }
                            </span>
                          </div>
                          <div className={styles.packs}>
                            <div className={`${styles.box} ${animatePack ?styles.slideFade:""}`}>
                                {packages.length > 0 && packages[activeBtn] && (
                                        <PackageList
                                        data={Object.values(packages[activeBtn])[0]}
                                    />
                                    )}
                            </div>
                            </div>
                       </div>
                    </section>
            </div>
        </article>
        </main>
    );
}
export default Content;

