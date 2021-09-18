import styles from "./Body.module.css";
import { useEffect, useState } from "react";

import lnkImage from "../images/lnk.jpg";
import passHImage from "../images/passhidder.jpg";
import chestingImage from "../images/chesting_table.jpg";
import mssnAppsImage from "../images/mssnapps.jpg";
import petsImage from "../images/pets.jpg";


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
    petsImage,
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
            case "seis":
                return <MyImage src={preloadedImages[5]}></MyImage>;
            default:
                return <MyImage src={preloadedImages[5]}/>;
        }
    }


    return  <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div mycontent="uno" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[0]} alt="Lnk"/>
                        <h3>Lnk</h3>
                        <p>I'm a person that always uses multiple devices at the same time, so I needed a way to share urls between them. That's how <i>Lnk</i> was born. The idea is simple, you paste the url in the app and it gets replicated to all the clients. If you click the notification the url opens automatically in a new tab.</p>
                        <p>You can use this credentials to log in:<br/>
                        <i><b>user: </b>test@mssnapps.com</i><br/>
                        <i><b>password: </b>ThisIsNotThePass</i><br/>
                        </p>
                        <a href="https://mssnapps.com/lnk">live</a>
                        
                    </div>
                    <div mycontent="dos" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[1]} alt="pets"/>
                        <h3>Pets</h3>
                        <p>In my Job we use VM's to work, so it's hard to share pictures of my pets with my coworkers. Not anymore.</p>
                        <p>The gallery gets the pictures on scroll, and these are compressed so the app is designed to load fast on any device.</p>
                        <a href="https://mssnapps.com/pets">live</a>
                    </div>
                    <div mycontent="tres" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[2]} alt="passhidder"/>
                        <h3>PassHidder</h3>
                        <p>I saw something like this somewhere on the web, so I turned it into an Angular module.</p>
                        <a href="https://www.npmjs.com/package/passhidder">npm</a>
                    </div>
                    <div mycontent="cuatro" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[3]} alt="chesting"/>
                        <h3>Chesting Table</h3>
                        <p>I've always liked programming, and that's what I do in my free time. I made this mod as a joke, it basically is a chest that looks like a crafting table, instead of having 27 slots, it has 10. I decided to take it even further and made a furnace and a backpack.</p>
                        <p><b>Ps.</b> I love the furnace idea because it cooks faster depending on how many items there are in the fuel slot.</p>
                        <p>1 slot = 1x speed, 3 slots = 3x speed.</p>
                    </div>
                    <div mycontent="cinco" className={styles.textCard+" bodyCard"}>
                        <img className={styles.mobileImage} src={preloadedImages[4]} alt="mssnapps"/>
                        <h3>MssnApps</h3>
                        <p>MssnApps is my web design agency. When I have the resources I plan to make something unique out of it.</p>
                        <a href="https://mssnapps.com/">live</a>
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