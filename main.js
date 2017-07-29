let eHealthBar = document.getElementById("enemyHlth");
let punchBtn = document.getElementById("punch");
let eHealthNum = document.getElementById("enemyHlthNum");

function updEHealth(){
  eHealthNum.innerHTML = eHealthBar.value;
}

function updFHealth(){
  fHealthNum.innerHTML = fHealthBar.value;
}


function punch(){
  eHealthBar = eHealthBar;
  eHealthBar.value -= 9 + Math.floor(Math.random()*5);
  eHealthNum.innerHtml = eHealthBar.value;
  updEHealth();
}

function judo(){
  eHealthBar = eHealthBar;
  eHealthBar.value -= 7 + Math.floor(Math.random()*13);
  updEHealth();
}



// var pBar = document.getElementById('p');
// var updateProgress = function(value) {
//   pBar.value = value;
//   pBar.getElementsByTagName('span')[0].innerHTML = Math.floor((100 / 70) * value);
// }
