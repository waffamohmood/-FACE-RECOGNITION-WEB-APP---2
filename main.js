Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src=" '+data_uri+'"/>'
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CbeZR2F3o/ model.json",modelLoaded);
function modelLoaded(){
    console.log("model Loaded");
}
