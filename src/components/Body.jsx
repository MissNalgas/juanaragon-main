import styles from "./Body.module.css";
import { useEffect, useState } from "react";

import lnkImage from "../images/lnk.jpg";
import passHImage from "../images/passhidder.jpg";
import chestingImage from "../images/chesting_table.jpg";
import mssnAppsImage from "../images/mssnapps.jpg";


import React from "react";

const myImageProv = import("./MyImage");
const MyImage = React.lazy(() => myImageProv);


const compare = (elementA, elementB) => {

    const half = window.innerHeight / 2;
    const distA = Math.abs(elementA.getBoundingClientRect().y - half);
    const distB = Math.abs(elementB.getBoundingClientRect().y - half);

    if (distA < distB) {
        return elementA;
    } else {
        return elementB;
    }
}

const preloadedImages = [
    lnkImage,
    passHImage,
    chestingImage,
    mssnAppsImage,
    "https://mssnapplications.com/cats/cat1620165670025.jpg"
]



export default function Body() {

    const [image, setImage] = useState(lnkImage);

    useEffect(() => {
        let images = [];
        for (let i = 0; i < preloadedImages.length; i++) {
            images[i] = new Image();
            images[i].src = preloadedImages[i];
        }
    }, [])


    useEffect(() => {
        const els = document.getElementsByClassName("bodyCard");
        const onScroll = (e) => {
            let obj = els[0];
            for (let i = 0; i < els.length; i++) {
                obj = compare(obj, els[i]);
            }
            const value = obj.attributes["mycontent"].value;
            setImage(value);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const getElement = (str) => {
        switch(str) {
            case "uno":
                return <MyImage src={preloadedImages[0]}/>;
            case "dos":
                return <MyImage src={preloadedImages[1]}/>;
            case "tres":
                return <MyImage src={preloadedImages[2]}/>;
            case "cuatro":
                return <MyImage src={preloadedImages[3]}/>;
            case "cinco":
                return <MyImage src={preloadedImages[4]}/>;
            default:
                return <MyImage src={preloadedImages[5]}/>;
        }
    }


    return  <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div mycontent="uno" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[0]} alt="Lnk"/>
                        <h3>Lnk</h3>
                        <p>Lnk is web url manager</p>
                    </div>
                    <div mycontent="dos" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[1]} alt="Lnk"/>
                        <h3>PassHidder</h3>
                        <p>PassHidder is an Angular module</p>
                    </div>
                    <div mycontent="tres" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[2]} alt="Lnk"/>
                        <h3>Chesting Table</h3>
                        <p>Chesting table is a minecraft mod</p>
                    </div>
                    <div mycontent="cuatro" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[3]} alt="Lnk"/>
                        <h3>MssnApps</h3>
                        <p>MssnApps is a WebDesign agency</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <React.Suspense fallback={<div>loading</div>}>
                    <div key={image} className={styles.imageCont}>
                        {getElement(image)}
                    </div>
                    </React.Suspense>
                </div>
            </div>
}