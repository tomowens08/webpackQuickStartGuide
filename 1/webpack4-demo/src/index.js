﻿function component() {
 let element = document.createElement('div');
// Lodash, currently included via a script, is required for this line to work
 element.innerHTML = _.join(['Testing', 'webpack4'], ' ');
return element;
}
document.body.appendChild(component());