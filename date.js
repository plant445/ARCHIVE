
//changes color of intro text based on the day
let now = new Date();
let currentDay = now.getDay();

console.log(currentDay);

//DOM Query #1
var paragraph = document.getElementById("intro");

if(currentDay == 1){
    paragraph.style.color = 'red';
} else if(currentDay == 2){
    paragraph.style.color = 'orange';
} else if(currentDay == 3){
    paragraph.style.color = 'rgb(0, 144, 172)';
}else if(currentDay == 4){
    paragraph.style.color = 'green';
}else if(currentDay == 5){
    paragraph.style.color = 'blue';
}else if(currentDay == 6){
    paragraph.style.color = 'purple';
}else {
    paragraph.style.color = 'rgb(255, 0, 157)';
}

//button to change color of background

//DOM Query #2
var button = document.getElementById("button");

//Function #1
function generateColor() {
    var navText = document.querySelector("nav");
    var link = navText.querySelectorAll('a');
    let randomIntOne = Math.floor(Math.random() * 255);
    let randomIntTwo = Math.floor(Math.random() * 255);
    let randomIntThree = Math.floor(Math.random() * 255);

    for(var i in link){
        link[i].style.color = 'rgb(' + randomIntOne + ", " + randomIntTwo + ", " + randomIntThree + ")";
    }
}

button.addEventListener("click", generateColor);
// button.onclick = generateColor;


var buttonTwo = document.getElementById("button2");

function changeText(){
    var navText = document.querySelector("nav");
    var link = navText.querySelectorAll('a');

    for(var i in link){
        let originalText = link[i].textContent;
        let firstLetter = originalText.charAt(0);
        link[i].textContent = firstLetter;
    }
}

button2.addEventListener("click", changeText);
// buttonTwo.onclick = changeText;
