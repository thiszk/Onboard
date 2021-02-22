import _ from 'lodash';
import name from './name';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Olá,', `${name}!`], ' ');

  return element;
}

document.body.appendChild(component());