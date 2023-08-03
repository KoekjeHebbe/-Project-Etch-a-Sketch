const container = document.querySelector("#container");
let amount = 0;
generateGrid(amount);

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
    console.log(side);
    generateGrid(amount,side);
    //changeDivAtt(side);
}

function generateGrid (amount,side){
    for (let a = 0; amount < 256; amount++){
    const divke = document.createElement("div");
    divke.classList.add("grid");
    divke.addEventListener("mouseover", changeColor);
    divke.style.width = side;
    divke.style.height = side;
    console.log(side);
    container.appendChild(divke);
    }
}

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function changeDivAtt(side){
    document.getElementsByClassName("grid").style.width = side;
    console.log(side);
}