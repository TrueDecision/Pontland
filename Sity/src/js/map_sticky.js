let objToStick1 = document.getElementById("aside_sticky");
let topOfObjToStick1 = objToStick1.offsetTop;
let sliderMarginBottom = document.getElementById("slider")

let objToStick2 = document.getElementById("map");
let topOfObjToStick2 = objToStick2.offsetTop;

function qwe() {
  let windowScroll1 = window.pageYOffset;
  if (windowScroll1 > topOfObjToStick1) {
    objToStick1.classList.add("sticky");
    sliderMarginBottom.classList.add("margin_bottom")
      } else {
    objToStick1.classList.remove("sticky");
    sliderMarginBottom.classList.remove("margin_bottom")
    };
  let windowScroll2 = window.pageYOffset + 86;
  if (windowScroll2 > topOfObjToStick2) { 
    objToStick2.classList.add("sticky_map");
      } else {
    objToStick2.classList.remove("sticky_map");
    };
    };

window.onscroll = function() {qwe()};
