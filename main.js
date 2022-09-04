const container = document.querySelector('#container');

for (i = 1; i <257; i++){
    const box = document.createElement('box');
    box.classList.add('box');
    
    container.appendChild(box); 
    box.addEventListener("mouseover",function handleMouseOver(){
    box.style.backgroundColor = "#C2EDCE";
    }); //Change colour of boxes on mouse hover
   
    
} //Creates 16 boxes



