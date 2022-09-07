

function getSize() {
    let userInput = parseInt.apply(prompt("Please enter the side length of the square.")); //Asks user to input a value
}

function createContainer(size) { //take any number and arrange as a grid
    
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size},1fr`;
    container.style.gridTemplateRows = `repeat(${size},1fr`;
    let numBoxes = size * size;

for (i = 1; i <numBoxes; i++){
    const box = document.createElement('box');
    container.insertAdjacentElement("beforeend",box)
    
    //container.appendChild(box); 
    box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "#C2EDCE";
    }); //Change colour of boxes on mouse hover
} //Creates boxes
}





