let eHealthBar = document.getElementById("enemyHlth");
let punchBtn = document.getElementById("punch");
let eHealthNum = document.getElementById("enemyHlthNum");

function updEHealth(){
  eHealthNum.innerHTML = eHealthBar.value;
}

function updFHealth(){
  fHealthNum.innerHTML = fHealthBar.value;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function critDisplay() {
  document.getElementById("crit").style.display = "block";
  console.log("crit");
  await sleep(2000);
  document.getElementById("crit").style.display = "none";
}


function punch(){
  //default attack
  let chance = Math.random();
  let dmg = 0;
  eHealthBar = eHealthBar;
  if (chance <= .1){
    dmg = Math.floor(Math.random()*6)+2;
  } else if (chance >.1 && chance <= .9){
    dmg = Math.floor(Math.random()*10)+4;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*6)+12;
    critDisplay();
  }
  eHealthBar.value -= dmg;
  console.log(dmg);
  updEHealth();
}

function judo(){
  //higher risk of failure/crit. Low non-crit dmg.
  let chance = Math.random();
  let dmg = 0;
  eHealthBar = eHealthBar;
  if (chance <= .15){
    dmg = Math.floor(Math.random()*7)+1;
  } else if (chance >.15 && chance <= .9){
    dmg = Math.floor(Math.random()*8)+3;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*4)+18;
    critDisplay();
  }
  eHealthBar.value -= dmg;
  console.log(dmg);
  updEHealth();
}

function dmgRnd(){
  let chance = Math.random();
  let dmg = 0;
  if (chance <= .1){
    dmg = Math.floor(Math.random()*6)+2;
  } else if (chance >.1 && chance <= .9){
    dmg = Math.floor(Math.random()*10)+4;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*6)+12;

  }
}
