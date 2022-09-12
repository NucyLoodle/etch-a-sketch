createContainer(16); //Default size


let btn_popup = document.querySelector("#btnQuestion");
btn_popup.addEventListener("click", function() {
    resetColour()
    let size = getSize();
    if (size <100 && size >= 1) {
        createContainer(size);
    } else {
        alert("Please choose a number between 1 and 100.")
    }
    
}) //User can click button to enter a number

let btnColour = document.querySelector("#colourChange");
btnColour.addEventListener("click", function() {
    resetColour();
    randomColour();
}) //User can change colours 

let btnBlack = document.querySelector("#black");
btnBlack.addEventListener("click", function() {
    resetColour();
    blackColour();
}) //User can change colours 

let btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", function() {
    resetColour();
}) //User can reset grid but retain number of boxes

function getSize() {
    let userInput = (prompt("Please enter the side length of the square.")); //Asks user to input a value
    return userInput;
} //Creates a prompt box



function createContainer(size) { //take any number and arrange as a grid
    
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size},1fr`;
    container.style.gridTemplateRows = `repeat(${size},1fr`;
    let numBoxes = size * size;

for (i = 1; i <=numBoxes; i++){
    const box = document.createElement('box');
    container.insertAdjacentElement("beforeend", box)

    box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "black";
    }); //Change colour of boxes on mouse hover
} //Creates boxes
resetColour();
}

function resetColour(){ 
    let allBoxes = document.querySelectorAll("box");
    allBoxes.forEach((box) => box.style.backgroundColor = "white")
}; //Resets the colour of the boxes to white


function randomColour(){
    let allBoxes = document.querySelectorAll("box");
    allBoxes.forEach((box) => {
        box.addEventListener("mouseover", function randomColour() {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    })     
    }); //Change colour of boxes randomly
}

function blackColour(){
    let allBoxes = document.querySelectorAll("box");
    allBoxes.forEach((box) => {
        box.addEventListener("mouseover", function handleMouseOver() {
            box.style.backgroundColor = "black";
    })     
    }); //Change colour of boxes to black
}

