import nav from "./nav";
const getGSAP = () => import('gsap');
// import { footer } from "./footer";
const getFooter = () => import("./footer");
const getLodashUniq = () => import('lodash-es/uniq');
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);

button.addEventListener("click", e => {
    getFooter().then(footerModule => {
        document.body.appendChild(footerModule.footer);
    });

    getLodashUniq().then(uniq => {
        console.log(uniq);
    });

    getGSAP().then(gsap => {
        console.log(gsap);
    })
});


document.body.appendChild(image);

