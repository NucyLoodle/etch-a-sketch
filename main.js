const container = document.querySelector('#container');

for (i = 1; i <257; i++){
    const box = document.createElement('box');
    box.classList.add('box');
    container.appendChild(box); 
} //Creates 16 boxes

const box = document.querySelector('box');
box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "#00FF00";
}); //Change colour of boxes on mouse hover

//To do - it's taking a long time to change colour!

