video = "";
myStatus = "";
animal = "";

function setup() {
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Status : Detecting Objects';
    animal = document.getElementById("input1").value;
}

function modelLoaded() {
    console.log('Model Loaded');
    myStatus = true;
}