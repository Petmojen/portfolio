// PlaytimeTD variables and links
const playtimeSliderList = document.getElementById("playtimeSliderPhotos").children; //Make list of children
var playtimeSliderNum = document.getElementById("playtimeSliderCurrentNumber"); //Get <p> to display current child
let playtimeCurrent = 0; //Current num used in list
playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;

// Lumberman variables and links
const lumbermanSliderList = document.getElementById("lumbermanSliderPhotos").children; //Make list of children
var lumbermanSliderNum = document.getElementById("lumbermanSliderCurrentNumber"); //Get <p> to display current child
let lumbermanCurrent = 0; //Current num used in list
lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;

//Astronought variables and links
const astronoughtSliderList = document.getElementById("astronoughtSliderPhotos").children;
var astronoughtSliderNum = document.getElementById("astronoughtSliderCurrentNumber");
let astronoughtCurrent = 0;
astronoughtSliderNum.innerHTML = (astronoughtCurrent + 1) + "/" + astronoughtSliderList.length;

//Tower of Aour variables and links
const towerOASliderList = document.getElementById("towerOASliderPhotos").children;
var towerOASliderNum = document.getElementById("towerOASliderCurrentNumber");
let towerOACurrent = 0;
towerOASliderNum.innerHTML = (towerOACurrent + 1) + "/" + towerOASliderList.length;

//Cycles:Reborn variables and links
const cyclesSliderList = document.getElementById("cyclesSliderPhotos").children;
var cyclesSliderNum = document.getElementById("cyclesCurrentNumber");
let cyclesCurrent = 0;
cyclesSliderNum.innerHTML = (cyclesCurrent + 1) + "/" + cyclesSliderList.length;

//Bag of Rocks Eats Scissors variables and links
const bagOfSliderList = document.getElementById("bagOfSliderPhotos").children;
var bagOfSliderNum = document.getElementById("bagOfCurrentNumber");
let bagOfCurrent = 0;
bagOfSliderNum.innerHTML = (bagOfCurrent + 1) + "/" + bagOfSliderList.length;

for(let i = 1; i <= 20; i++) { //Turn off all but first child in slider
  if(lumbermanSliderList[i] !== undefined) {
    lumbermanSliderList[i].style.display = "none";
  }

  if(playtimeSliderList[i] !== undefined) {
    playtimeSliderList[i].style.display = "none";
  }

  if(astronoughtSliderList[i] !== undefined) {
    astronoughtSliderList[i].style.display = "none";
  }

  if(towerOASliderList[i] !== undefined) {
    towerOASliderList[i].style.display = "none";
  }

  if(cyclesSliderList[i] !== undefined) {
    cyclesSliderList[i].style.display = "none";
  }

  if(bagOfSliderList[i] !== undefined) {
    bagOfSliderList[i].style.display = "none";
  }
}


function Next(chosenList) { //Go to next item in slide
  let x = 0;

  switch (chosenList) { //Set X to correct list current number
    case playtimeSliderList:
      x = playtimeCurrent;
      break;
    case lumbermanSliderList:
      x = lumbermanCurrent;
      break;
    case astronoughtSliderList:
      x = astronoughtCurrent;
      break;
    case towerOASliderList:
      x = towerOACurrent;
      break;
    case cyclesSliderList:
      x = cyclesCurrent;
      break;
    case bagOfSliderList:
      x = bagOfCurrent;
      break;
  }
  chosenList[x].style.display = "none"; //Deactivate current element

  if(x < chosenList.length - 1) { //Go through list
    x++;
  } else {
    x = 0;
  }
  chosenList[x].style.display = "inline-block"; //Activate next element


  switch (chosenList) { //Update current list number by X
    case playtimeSliderList:
      playtimeCurrent = x;
      playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;
      break;
    case lumbermanSliderList:
      lumbermanCurrent = x;
      lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;
      break;
    case astronoughtSliderList:
      astronoughtCurrent = x;
      astronoughtSliderNum.innerHTML = (astronoughtCurrent + 1) + "/" + astronoughtSliderList.length;
      break;
    case towerOASliderList:
      towerOACurrent = x;
      towerOASliderNum.innerHTML = (towerOACurrent + 1) + "/" + towerOASliderList.length;
      break;
    case cyclesSliderList:
      cyclesCurrent = x;
      cyclesSliderNum.innerHTML = (cyclesCurrent + 1) + "/" + cyclesSliderList.length;
      break;
    case bagOfSliderList:
      bagOfCurrent = x;
      bagOfSliderNum.innerHTML = (bagOfCurrent + 1) + "/" + bagOfSliderList.length;
      break;
  }
}

function Back(chosenList) { //Go to previous item in slide
  let x = 0;

  switch (chosenList) { //Set X to correct list current number
    case playtimeSliderList:
      x = playtimeCurrent;
      break;
    case lumbermanSliderList:
      x = lumbermanCurrent;
      break;
    case astronoughtSliderList:
      x = astronoughtCurrent;
      break;
    case towerOASliderList:
      x = towerOACurrent;
      break;
    case cyclesSliderList:
        x = cyclesCurrent;
        break;
    case bagOfSliderList:
      x = bagOfCurrent;
      break;
  }
  chosenList[x].style.display = "none"; //Deactivate current element

  if(x > 0) { //Go through list
    x--;
  } else {
    x = chosenList.length - 1;
  }
  chosenList[x].style.display = "inline-block"; //Activate next element


  switch (chosenList) { //Update current list number by X
    case playtimeSliderList:
      playtimeCurrent = x;
      playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;
      break;
    case lumbermanSliderList:
      lumbermanCurrent = x;
      lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;
      break;
    case astronoughtSliderList:
      astronoughtCurrent = x;
      astronoughtSliderNum.innerHTML = (astronoughtCurrent + 1) + "/" + astronoughtSliderList.length;
      break;
    case towerOASliderList:
      towerOACurrent = x;
      towerOASliderNum.innerHTML = (towerOACurrent + 1) + "/" + towerOASliderList.length;
      break;
    case cyclesSliderList:
        cyclesCurrent = x;
        cyclesSliderNum.innerHTML = (cyclesCurrent + 1) + "/" + cyclesSliderList.length;
        break;
    case bagOfSliderList:
      bagOfCurrent = x;
      bagOfSliderNum.innerHTML = (bagOfCurrent + 1) + "/" + bagOfSliderList.length;
      break;
  }
}
