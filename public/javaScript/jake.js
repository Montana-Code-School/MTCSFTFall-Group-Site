console.log("ye gotta loicense for that script, mate?")

var elem = document.querySelector('button');

let btnThng = function(tag) {
  return tag.style.margin = 30px
}

document.getElementsByTagName('button').addEventListener('click', btnThng(elem))
