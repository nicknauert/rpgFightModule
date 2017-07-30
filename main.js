let eHealthBar = document.getElementById("enemyHlth");
let eHealthNum = document.getElementById("enemyHlthNum");
let fHealthBar = document.getElementById("friendlyHlth");
let fHealthNum = document.getElementById("myHlthNum");
let turnCount = 0;




// Characters ==========================
let hero = {
  name: "Gar'bo",
  health: 100,
  atk: 5, //dmg = dmg * (1 + (atk * 0.1)); i.e. dmg * 1.5
  armor: 3, // dmg = dmg * (1 + (atk * 0.1)) / (1 + (armor * .05); i.e. dmg * 1.5 / 1.15
}

let baddie = {
  name: "Squintz",
  health: 80,
  atk: 4,
  armor: 2
}





// Health Updater Functions ============================

function updEHealth(){
  eHealthNum.innerHTML = eHealthBar.value;
}
updEHealth();

function updFHealth(){
  fHealthNum.innerHTML = fHealthBar.value;
}
updFHealth();




// crit display=============================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function critDisplay() {
  document.getElementById("crit").style.display = "block";
  console.log("Critical Hit!");
  await sleep(2000);
  document.getElementById("crit").style.display = "none";
}





// actions ======================================

async function punch(){
  let chance = Math.random();
  let dmg = 0;

  if (chance <= .1){
    dmg = Math.floor(Math.random()*6)+2;
  } else if (chance >.1 && chance <= .9){
    dmg = Math.floor(Math.random()*10)+4;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*6)+12;
    critDisplay();
  }
  eHealthBar.value -= Math.round(dmg * (1+(hero.atk*.1)) / (1+(baddie.armor*.05)));
  console.log("You Do " + Math.round(dmg * (1+(hero.atk*.1)) / (1+(baddie.armor*.05))) + " dmg");
  updEHealth();
  turnCount++;
  await sleep(500);
  enemyTurn();

}

async function judo(){
  //higher risk of failure/crit. Low non-crit dmg.
  let chance = Math.random();
  let dmg = 0;
  if (chance <= .15){
    dmg = Math.floor(Math.random()*7)+1;
  } else if (chance >.15 && chance <= .9){
    dmg = Math.floor(Math.random()*8)+3;
  } else if (chance >= .9){
    dmg = Math.floor(Math.random()*4)+18;
    critDisplay();
  }
  eHealthBar.value -= Math.round(dmg * (1+(hero.atk*.1)) / (1+(baddie.armor*.05)));
  console.log("You Do " + Math.round(dmg * (1+(hero.atk*.1)) / (1+(baddie.armor*.05))) + " dmg");
  updEHealth();
  turnCount++;
  await sleep(500);
  enemyTurn();
}

async function insultMother(){
  let chance = Math.random();
  let count = turnCount;

  if (chance >= .2){
    hero.atk *= 1.20;
    console.log("Your ATK has increased!");
    console.log("ATK is " + hero.atk);
    await(turnCount === count + 3);
  } else {
    console.log("Your insult was whack!")
  }
  await sleep(500);
  enemyTurn();
}




// Enemy function ==========================

function enemyTurn() {
  let moveChance = Math.random();
  let dmg = 0;

  function ePunch() {
    chance = Math.random();

    if (chance <= .1){
      dmg = Math.floor(Math.random()*6)+2;
    } else if (chance >.1 && chance <= .9){
      dmg = Math.floor(Math.random()*10)+4;
    } else if (chance >= .9){
      dmg = Math.floor(Math.random()*6)+12;
      critDisplay();
    }
    fHealthBar.value -= Math.round(dmg * (1+(baddie.atk*.1)) / (1+(hero.armor*.05)));
    console.log("Enemy does " + Math.round(dmg * (1+(baddie.atk*.1)) / (1+(hero.armor*.05))) + " dmg");
    updFHealth();
  }

  function eJudo(){
    let chance = Math.random();

    if (chance <= .15){
      dmg = Math.floor(Math.random()*7)+1;
    } else if (chance >.15 && chance <= .9){
      dmg = Math.floor(Math.random()*8)+3;
    } else if (chance >= .9){
      dmg = Math.floor(Math.random()*4)+18;
      critDisplay();
    }
    fHealthBar.value -= Math.round(dmg * (1+(baddie.atk*.1)) / (1+(hero.armor*.05)));
    console.log("Enemy does " + Math.round(dmg * (1+(baddie.atk*.1)) / (1+(hero.armor*.05))) + " dmg");
    updFHealth();
  }
  if (moveChance>.5){
    ePunch();
  } else {
    eJudo();
  }
}
