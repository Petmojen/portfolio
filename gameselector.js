const playtimeElement = document.getElementById("playtimeTD");
const lumbermanElement = document.getElementById("lumberman");

// return;
let gamesList = [];
gamesList.push(playtimeElement);
gamesList.push(lumbermanElement);
//DeactivateGames();

function DeactivateGames() {
  for(let i = 0; i < gamesList.length; i++) {
    gamesList[i].style.display = "none";
  }
}

function SelectGame(chosenGame) {
  //DeactivateGames();
  //chosenGame.style.display = "block";
  chosenGame.scrollIntoView();
}
