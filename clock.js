var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hr = document.getElementById("hour");
var s;
var m;
var h;
setInterval(function(){ 
    var today = new Date();
    s = today.getSeconds();
    m = today.getMinutes();
    h = today.getHours();
    sec.style.transform = "rotate(" + s*6 +"deg)";
    hr.style.transform = "rotate(" + h*30 + "deg)";
    min.style.transform = "rotate(" + m*6 + "deg)";
},1000);