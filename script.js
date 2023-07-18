function changeText(){
    document.getElementById('changeText').innerHTML = "Hello World!!"

}

function changeText2(){
    // document.getElementsByTagName('h1')[0].innerHTML = "Welcome To Elevation Academy"
    document.write('"Welcome To Elevation Academy"')
}

function ChangeStyle(){
    var a = document.getElementById('ChangeStyle');
    a.setAttribute('class','changeStyle');
    a.setAttribute('id', "heading");
}

function changeDirection(){
    let a = document.getElementsByClassName('cardContainer')[0].setAttribute('class', "flexColumn")
}


// function updateTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();

//     hours = (hours < 10 ? "0" : "") + hours;
//     minutes = (minutes < 10 ? "0" : "") + minutes;
//     seconds = (seconds < 10 ? "0" : "") + seconds;

//     var clockElement = document.getElementById("time");
//     clockElement.textContent = hours + ":" + minutes + ":" + seconds;
//   }

//   // Update the time every second
//   setInterval(updateTime, 1000);


function clock(){
    var now = new Date()
    var hours = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()
    var time = document.getElementById('time').innerHTML = `${hours} : ${min} : ${sec}`; 

    }  
setInterval(clock, 1000);

