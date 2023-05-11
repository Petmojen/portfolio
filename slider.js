// Lumberman variables and links
const lumbermanSliderList = document.getElementById("lumbermanSliderPhotos").children; //Make list of children
var lumbermanSliderNum = document.getElementById("lumbermanSliderCurrentNumber"); //Get <p> to display current child
let lumbermanCurrent = 0; //int used to
lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;

// PlaytimeTD variables and links
const playtimeSliderList = document.getElementById("playtimeSliderPhotos").children;
var playtimeSliderNum = document.getElementById("playtimeSliderCurrentNumber");
let playtimeCurrent = 0;
playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;

for(let i = 1; i <= 20; i++) { //Turn off all but first child in slider
  if(lumbermanSliderList[i] !== undefined) {
    lumbermanSliderList[i].style.display = "none";
  }

  if(playtimeSliderList[i] !== undefined) {
    playtimeSliderList[i].style.display = "none";
  }
}


function Next(chosenList) { //Go to next item in slide
  let x = 0;

  switch (chosenList) { //Set X to correct list current number
    case lumbermanSliderList:
      x = lumbermanCurrent;
      break;
    case playtimeSliderList:
      x = playtimeCurrent;
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
    case lumbermanSliderList:
      lumbermanCurrent = x;
      lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;
      break;
    case playtimeSliderList:
      playtimeCurrent = x;
      playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;
      break;
  }
}

function Back(chosenList) { //Go to previous item in slide
  let x = 0;

  switch (chosenList) { //Set X to correct list current number
    case lumbermanSliderList:
      x = lumbermanCurrent;
      break;
    case playtimeSliderList:
      x = playtimeCurrent;
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
    case lumbermanSliderList:
      lumbermanCurrent = x;
      lumbermanSliderNum.innerHTML = (lumbermanCurrent + 1) + "/" + lumbermanSliderList.length;
      break;
    case playtimeSliderList:
      playtimeCurrent = x;
      playtimeSliderNum.innerHTML = (playtimeCurrent + 1) + "/" + playtimeSliderList.length;
      break;
  }
}
