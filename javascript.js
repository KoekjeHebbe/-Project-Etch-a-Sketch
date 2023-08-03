const container = document.querySelector("#container");
let amount = 256;
let side = '60px';
generateGrid(amount,side);

function changeColor(e){
    e.target.classList.add("hover");
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
    container.appendChild(divke);
    }
}

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}