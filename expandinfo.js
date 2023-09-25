playtimeInfo = document.getElementById("playtimeInfoBox");
playtimeInfo.style.display = "none";

lumbermanInfo = document.getElementById("lumbermanInfoBox");
lumbermanInfo.style.display = "none";

astronoughtInfo = document.getElementById("astronoughtInfoBox");
astronoughtInfo.style.display = "none";

towerOfAourInfo = document.getElementById("towerOAInfoBox");
towerOfAourInfo.style.display = "none";

cyclesInfo = document.getElementById("cyclesInfoBox");
cyclesInfo.style.display = "none";

bagOfInfo = document.getElementById("bagOfInfoBox");
bagOfInfo.style.display = "none";

function ExpandInfoBox(selectedbox, childImage) {
    if(selectedbox.style.display == "none") {
        childImage.children[0].src = "images/Icon/CloseInformationButton.png"
        selectedbox.style.display = "inline-block";
    } else {
        childImage.children[0].src = "images/Icon/InformationButton.png"
        selectedbox.style.display = "none";
    }
}