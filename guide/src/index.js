import _ from 'lodash';
import './style.css';
import imageHelloFile from './hello2.png';

import dataXML from './data.xml';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  let imageHello = new Image();
  imageHello.src = imageHelloFile;
  element.appendChild(imageHello);

  console.log(dataXML);

  return element;
}

document.body.appendChild(component());
