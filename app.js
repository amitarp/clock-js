window.addEventListener('load',calcualteTime)

function calcualteTime(){
    var date = new Date();
    console.log(date);
    var daynumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var daynames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    hour = hour % 12;
    hour = hour == 12 ? 12 : hour;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = daynames[daynumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calcualteTime,200);
}

calcualteTime()