const container = document.querySelector("#container");
let amount = 256;
let side = '60px';
let bness = 1;
generateGrid(amount,side);

function changeColor(e){
    e.target.style.backgroundColor = "#" + randColor();
    changeBrightness(e);
}

function clicked (){
    let amountPerSide = prompt("Please enter the amount of squares you would like:");
    if (amountPerSide > 100){
        amountPerSide = 100;
    }
    amount = amountPerSide*amountPerSide;
    console.log(amount)
    clearGrid();
    let side = `${960/amountPerSide}px`;
    generateGrid(amount,side);
    //changeDivAtt(side);
}

function generateGrid (amount,side){
    for (let a = 0; a < amount; a++){
    const divke = document.createElement("div");
    divke.classList.add("grid");
    divke.addEventListener("mouseover", changeColor);
    divke.style.width = side;
    divke.style.height = side;
    divke.style.filter = "brightness(1)";
    container.appendChild(divke);
    }
}

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function randColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function changeBrightness(e){
    bness = e.target.style.filter;
    if (bness === "brightness(1)"){
        e.target.style.filter = "brightness(0.9)";
    }
    else if (bness === "brightness(0.9)"){
        e.target.style.filter = "brightness(0.8)";
    }
    else if (bness === "brightness(0.8)"){
        e.target.style.filter = "brightness(0.7)";
    }
    else if (bness === "brightness(0.7)"){
        e.target.style.filter = "brightness(0.6)";
    }
    else if (bness === "brightness(0.6)"){
        e.target.style.filter = "brightness(0.5)";
    }
    else if (bness === "brightness(0.5)"){
        e.target.style.filter = "brightness(0.4)";
    }
    else if (bness === "brightness(0.4)"){
        e.target.style.filter = "brightness(0.3)";
    }
    else if (bness === "brightness(0.3)"){
        e.target.style.filter = "brightness(0.2)";
    }
    else if (bness === "brightness(0.2)"){
        e.target.style.filter = "brightness(0.1)";
    }
    else if (bness === "brightness(0.1)"){
        e.target.style.filter = "brightness(0.0)";
    }
}