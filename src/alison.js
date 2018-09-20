var img =document.getElementById("logo");
var theParent = document.getElementById("parentBtn");
theParent.addEventListener("click", setLogo, false);

var gBtn = document.getElementById("gBtn");
var sBtn = document.getElementById("sBtn");
var rBtn = document.getElementById("rBtn");
var hBtn = document.getElementById("hBtn");
var img =document.getElementById("logo");

function setLogo(e) {
    var clickedItem = e.target.id;
    switch(clickedItem) {
    case "gBtn":
    	logo.src = "../images/a griffdoff.jpg";
      break;
    case "hBtn":
     	logo.src = "../images/hufflepuff.jpg";
      break;
    case "rBtn":
      logo.src = "../images/ravenclaw.jpg";
      break;
    case "sBtn" :
    	logo.src = "../images/slytherin.jpg";
      break;
    }
}
