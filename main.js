const container = document.querySelector('#container');

let userInput = prompt("Please enter the side length of the square."); //Asks user to input a value
let num = parseInt(userInput);

for (i = 1; i <num*num; i++){
    const box = document.createElement('box');
    box.classList.add('box');
    
    container.appendChild(box); 
    box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "#C2EDCE";
    }); //Change colour of boxes on mouse hover
   
    
} //Creates boxes



