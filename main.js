const container = document.querySelector('#container');

for (i = 1; i <257; i++){
    const box = document.createElement('box');
    box.classList.add('box');
    container.appendChild(box); 

    box.addEventListener("mouseover", addColor);
} //Creates 16 boxes

function addColor(e) {
    e.target.style = `background-color: red`;
} // Adds colour to boxes

//To do - it's only happening on a click!

//const box = document.querySelector('box');
//const box = document.querySelector('box');
//box.addEventListener("mouseover",function handleMouseOver(){
    //box.style.backgroundColor = "#00FF00";
//}); //Change colour of boxes on mouse hover


