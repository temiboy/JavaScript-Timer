let min = 02;
let sec = 00;

let nowsec = 00;
let nowmin = 00;

let interval = null;

function timer(){
    if(sec == 0){
        sec = 60;
        min--;
    }
    else{
        sec--;
        document.querySelector(".sec").innerHTML = nowsec;
        document.querySelector(".min").innerHTML = nowmin;
    }
    if(min < 10){
        nowmin = "0" + min;
    }
    else{
        nowmin = min;
    }
    if(sec < 10){
        nowsec = "0" + sec;
    }
    else{
        nowsec = sec;
    }
    if(min ==0 && sec ==0){
        alert("TIME OVER BOSSES!!!");
        clearInterval(interval);
        min = 02;
        document.querySelector(".sec").innerHTML = 00;
        document.querySelector(".min").innerHTML = 00;
    }
}
document.querySelector(".start").addEventListener("click", function(){
    interval = setInterval(timer, 1000);
});
document.querySelector(".reset").addEventListener("click", function(){
    clearInterval(interval);
    sec = 00;
    min = 02;
    document.querySelector(".sec").innerHTML = "00";
        document.querySelector(".min").innerHTML = "02";
});