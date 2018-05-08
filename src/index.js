import nav from './nav';
import {top, bottom} from './footer';
import makeButton from "./button";
import {makeColorStyle} from './button-styles';

console.log('nav: ', nav());
console.log(top);
console.log(bottom);
console.log(makeButton('my first button'));
console.log(makeColorStyle('purple'));