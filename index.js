/* "mocha-jsdom": "~1.1.0" paste this in case it doesn't work again later*/

function getFirstSelector(selector){
  /*Accepts a selector and returns the first element that matches.*/
  return document.querySelector(`${selector}`)
}
function nestedTarget(){
  /* pulls a .target out of #nested, note that # is used for IDs in selectors. */
  return document.getElementById('nested').getElementByClass('target')
}
function increaseRankBy(n){
  /*Increases the ranks in all of the .ranked-list by n, might need parseInt() */
}
function deepestChild(){
  /*pulls out the most deeply nested child from div#grand-node, iterate over elements and call querySelector() and querySelectorAll()*/
  
}