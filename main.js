var x_nose=0;
var y_nose=0;
function preload()
{
 image1=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup()
{
var canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
var bodymodel=ml5.poseNet(video,modelloaded);
bodymodel.on('pose',obtainedposes)
}
function draw()
{
image(video,0,0,500,400);
image(image1,x_nose,y_nose,50,50);
}
function modelloaded(){
    console.log("model loaded");
}
function obtainedposes(results){
 console.log(results);
 x_nose=results[0].pose.nose.x-85;
 y_nose=results[0].pose.nose.y-80;
 console.log(x_nose,y_nose);
 
}

