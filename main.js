let eHealthBar = document.getElementById("enemyHlth");
let punchBtn = document.getElementById("punch");
let eHealthNum = document.getElementById("enemyHlthNum");

// these two functions are used to push the updated hp value to the text display
function updEHealth(){
  eHealthNum.innerHTML = eHealthBar.value;
}

function updFHealth(){
  fHealthNum.innerHTML = fHealthBar.value;
}

// this is specific to the crit display, and re-useable for other things
// the quirk is it can only apply to async functions....
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// like this one
async function critDisplay() {
  document.getElementById("crit").style.display = "block";
  console.log("crit");
  await sleep(2000);
  document.getElementById("crit").style.display = "none";
}

// actions

function punch(){
  // pulls a random # for determining dmg
  let chance = Math.random();
  let dmg = 0;

  eHealthBar = eHealthBar; //this may or may not be necessary anymore idk man
  // setting damage levels for various chance outputs
  if (chance <= .1){
    dmg = Math.floor(Math.random()*6)+2;
  } else if (chance >.1 && chance <= .9){
    dmg = Math.floor(Math.random()*10)+4;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*6)+12;
    critDisplay(); //pops up the crit indicator if someone gets crat on
  }
  eHealthBar.value -= dmg; //updates enemy health with dmg out from above
  console.log(dmg); //debugging
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

// this was my test for the updated dmg model. does nothing
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
