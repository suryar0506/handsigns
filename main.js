Webcam.set({
width: 350,
height: 300,
img_format: 'png',
png_quality: 90
});
camera = document.getElementById("webcam_display_div");
Webcam.attach('#webcam_display_div');

function take_a_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_display_div").innerHTML = '<img id = "captured_snapshot" src = "'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xteJgfeWU/model.json',modelLoaded);

function modelLoaded(){
    console.log("The model is all set. Over.")
}
 
function check(){
    img = document.getElementById("captured_snapshot");
    classifier.classify(img, gotResult);
}

function speak (){
    synth = window.speechSynthesis;
    speech_data_1 = "The first guess is " + prediction_1;
    speech_data_2 = "My second guess is " + prediction_2;
    var SpeakToMe = new SpeechSynthesisUtterance(speech_data_1 + speech_data_2);
    synth.speak(SpeakToMe);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_guess_name").innerHTML = results[0].label;
        document.getElementById("result_guess_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0] == "peace"){
            document.getElementById("updated_image").src = "Peace.png";
        }
        if(results[0] == "tiger"){
            document.getElementById("updated_image").src = "tiger.jpeg";
        }
        if(results[0] == "snake"){
            document.getElementById("updated_image").src = "snake.jpeg";
        }
        if(results[0] == "rat"){
            document.getElementById("updated_image").src = "rat.jpeg";
        }
        if(results[0] == "shadow"){
            document.getElementById("updated_image").src = "Shadow clone.jpeg";
        }


        if(results[1] == "peace"){
            document.getElementById("updated_image2").src = "Peace.png";
        }
        if(results[1] == "tiger"){
            document.getElementById("updated_image2").src = "tiger.jpeg";
        }
        if(results[1] == "snake"){
            document.getElementById("updated_image2").src = "snake.jpeg";
        }
        if(results[1] == "rat"){
            document.getElementById("updated_image2").src = "rat.jpeg";
        }
        if(results[1] == "shadow"){
            document.getElementById("updated_image2").src = "Shadow clone.jpeg";
        }
    }
}

