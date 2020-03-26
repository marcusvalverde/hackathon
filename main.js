// for some reason, logo is not present when we look for it in the dom, but the code below works
// document.getElementById('searchform').remove();

document
  .getElementById('body')
  .insertAdjacentHTML('beforebegin', '<h1>HELLO</>');

console.log(document);
console.log('hello11');
