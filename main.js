song = "";
song2 = "";

function preload(){
song = loadSound(music.mp3);
song1 = loadSound(music2.mp3);
}

function setup(){
    
    canvas = createCanvas(400,400);
    canvas.position(430,150);

    video = createCapture(VIDEO);
    video.hide();
    }

    function draw(){
    image(video,0,0,600,500);
    }

    function play(){
    song.play();
    song2.play();
    }
    