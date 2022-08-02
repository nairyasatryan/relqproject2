let start = document.getElementById('start');
let reset= document.getElementById('reset');

let h = document.getElementById('hour');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');


// start a reference to the variable
 let startTimer = null;

 function timer(){
 if(h.value == 0 && m.value == 0 && s.value == 0){
    h.value = 0;
    m.value = 0;
    s.value = 0;
 } else if(s.value != 0){
    s.value--;
 } else if (m.value != 0 && s.value == 0){
    s.value = 59;
    m.value --;
 } else if(h.value != 0 && m.value == 0 && s.value == 0){
    m.value = 59
    s.value = 59
    h.value--
 }

 if(m.value == 60){
    h.value++
    m.value = 0
 }
 }

function stopTimer(){

    clearInterval(startTimer);
}



start.addEventListener('click', function () {
    //intialize the variable startTime
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval()
})

reset.addEventListener('click', function(){

    h.value = 0
    m.value = 0 
    s.value = 0
    stopTimer()



})



function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
   let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
