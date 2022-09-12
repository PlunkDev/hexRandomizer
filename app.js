const button = document.getElementById("przycisk");
button.addEventListener("click",funkcja);
colorName = document.getElementById("kolor");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlHex = urlParams.get("hex");
if (urlHex=0){
    document.getElementById("strona").style.backgroundColor="#40e0d0";
    document.getElementById("tytul").style.color="#40e0d0";
    colorName.innerHTML = "Hex Koloru: "+"#40e0d0";
    console.log(urlHex);
}
else{
    document.getElementById("strona").style.backgroundColor="#"+urlHex;
    document.getElementById("tytul").style.color="#"+urlHex;
    colorName.innerHTML = "Hex Koloru: "+"#"+urlHex;
    console.log(urlHex);
}


const color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "F"];

function funkcja(){
    let hex = color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]
    document.getElementById("strona").style.backgroundColor="#"+hex;
    document.getElementById("tytul").style.color="#"+hex;
    colorName.innerHTML = "Hex Koloru: "+"#"+hex;
    console.log(hex);
    history.pushState({}, null, "./index.html?hex="+hex);
}

function randomColor(){
    return Math.floor(Math.random()*color.length);
}