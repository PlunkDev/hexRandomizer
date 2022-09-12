const button = document.getElementById("przycisk");
button.addEventListener("click",funkcja);
colorName = document.getElementById("kolor");

const color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "F"];

function funkcja(){
    let hex = "#"+color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]+color[randomColor()]
    document.getElementById("strona").style.backgroundColor=hex;
    document.getElementById("tytul").style.color=hex;
    colorName.innerHTML = "Hex Koloru: "+hex;
    console.log(hex);
    return hex;
}

function randomColor(){
    return Math.floor(Math.random()*color.length);
}

/*
function funkcja(){
    color++;
    if (color == 1){
        document.getElementById("strona").style.backgroundColor="red";
        colorName.innerHTML = "Nazwa koloru: Czerwony";
    }
    if (color == 2){
        document.getElementById("strona").style.backgroundColor="green";
        colorName.innerHTML = "Nazwa koloru: Zielony";
    }
    if (color == 3){
        document.getElementById("strona").style.backgroundColor="blue";
        colorName.innerHTML = "Nazwa koloru: Niebieski";
    }
    if (color == 4){
        color = 0;
        document.getElementById("strona").style.backgroundColor="turquoise";
        colorName.innerHTML = "Nazwa koloru: Turkusowy";
    }
    console.log(color);
    console.log(colorName.innerHTML);
} */