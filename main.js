nose_x = 0;
nose_y = 0;


function preload() {

clown_img = loadImage("https://i.postimg.cc/nLZmNHK1/Clown-Nose-Download-PNG-Image.png");

}

function setup() {

    canvas = createCanvas(500, 650);
    background("white");
    canvas.position(700, 200);
    video = createCapture(VIDEO);   
    video.hide();
    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on("pose", got_poses);

}

function draw() {

    image(video, 0, 0, 500, 650);
    /*fill("red");
    stroke("red");
    circle(nose_x - 75, nose_y + 60, 50);*/
    image(clown_img, nose_x - 100, nose_y + 50, 60,60);

}

function modelLoaded() {

    console.log("model loaded");

}

function got_poses(result) {

    if (result.length > 0) {
        // console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;

        // Nose X is : 200 & Nose Y is : 100

        console.log("Nose X is : " + nose_x + "   Nose Y is : " + nose_y)
    }

}