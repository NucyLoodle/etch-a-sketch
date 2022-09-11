createContainer(16); //Default size

let btn_popup = document.querySelector("#btnQuestion");
btn_popup.addEventListener("click", function() {
    let size = getSize();
    createContainer(size);
}) //User can click button to enter a number


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
    
    //container.appendChild(box); 
    box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "#C2EDCE";
    }); //Change colour of boxes on mouse hover
} //Creates boxes
}




