function startTime(){
    const timeElement = document.getElementById("time");
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let y = date.getFullYear();
    let Mo = date.getMonth();
    let d = date.getDate();

    m = checkTime(m);
    s = checkTime(s);

    timeElement.textContent = y + "/" + Mo + "/" + d + "/" +  checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s);
    
    setTimeout(startTime, 1000);  
    }
    
    function checkTime(i){
    if (i < 10){
        return "0" + i;}
        else {
            return i;
        }
    }
    
    startTime();
