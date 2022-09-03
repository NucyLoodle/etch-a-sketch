function boxes(){
    let container = document.getElementById('body');
    let x = Math.floor(window.innerWidth/4); //width of boxes
    let y = Math.floor(window.innerHeight/4); //height of boxes
    for (let i = 0; i < x * y; i++) {//multiply x*y to get total area of boxes that can fit
        let box = document.createElement('div');//create a div
        box.className = 'box';//assign class
        container.appendChild(box);//append

}};

window.addEventListener('load', function() {
    boxes();
}); //loading webpage executes boxes function