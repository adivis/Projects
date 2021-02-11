setInterval(()=>{
    console.log("Hi");
    date = new Date();
    hour_time = date.getHours();
    min_time = date.getMinutes();
    sec_time = date.getSeconds();
    hour_rotate = 30*hour_time + min_time/2;
    min_rotate = 6*min_time;
    sec_rotate = 6*sec_time;

    hour.style.transform = `rotate(${hour_rotate}deg)`;
    min.style.transform = `rotate(${min_rotate}deg)`;
    sec.style.transform = `rotate(${sec_rotate}deg)`;
    document.getElementById("h").firstChild.nodeValue = hour_time;
    document.getElementById("m").firstChild.nodeValue = min_time;
    document.getElementById("s").firstChild.nodeValue = sec_time;
},1000);

