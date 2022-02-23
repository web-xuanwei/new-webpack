import _ from 'lodash';

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the 11111!';

  element.appendChild(btn);

  return element;
 }

 document.body.appendChild(component());