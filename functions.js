function display(val){ 
    document.getElementById("screen").value+=val 
} 
function equals(){ 
    let x = document.getElementById("screen").value 
    let y = eval(x) 
    document.getElementById("screen").value = y 
} 
function clr(){ 
    document.getElementById("screen").value = "" 
} 
var colors = ["red", "purple", "green","white", "black", "gray"];
var colorIndex = 0;
function changeColor() {
    var col = document.getElementById("body");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

