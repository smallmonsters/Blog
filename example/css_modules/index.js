// import styles from "./css/style.css"
// import styles1 from "./css/style1.css"

// let css = {}
// Object.assign(css, styles, styles1)
// console.log(css)

import composes from "./css/compose.css"

console.log(composes)

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Hello webpack'
  // element.classList.add(composes.otherClassName);
  element.classList.add(composes.otherClassName.split(" ")[0]);
  element.classList.add(composes.otherClassName.split(" ")[1]);
  return element;
}
document.body.appendChild(component());