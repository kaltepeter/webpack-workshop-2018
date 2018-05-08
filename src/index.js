import {footer} from "./footer";
import makeButton from "./button";
import {makeColorStyle} from "./button-styles";
import footerStyle from "./footer.css";
import buttonStyle from "./button.css";
import imageUrl from makeImage('./logo-on-white-bg.jpg');

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(imageUrl);
document.body.appendChild(footer);