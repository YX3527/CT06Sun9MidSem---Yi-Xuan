function setup() {
    createCanvas(600, 400);
    background(220);
}
function draw(){
    for(let i = 0; i < 10; i++)
        circle (50 + i * 40, 90, 30);
    
}