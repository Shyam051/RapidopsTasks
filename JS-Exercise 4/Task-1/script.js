let hr = 0;

let min = 0;

let sec = 0;

let msec = 0;

let timer = false;

function start(){
    timer = true;
    // console.log("hi");
    stopwatch();
    // document.getElementById("start").setAttribute("disabled",'');
}

function stop(){
    timer = false
    document.getElementById("resume").removeAttribute("disabled");
    document.getElementById("start").setAttribute("disabled",'');
}

function resume(){
    if (timer == false){
        timer = true
        stopwatch();
    }
}

function reset(){
    timer = false
    msec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("hr").innerHTML =  `00:`
    document.getElementById('min').innerHTML = `00:`
    document.getElementById('sec').innerHTML = `00:`;
    document.getElementById("msec").innerHTML = `00`;
    document.getElementById("start").removeAttribute("disabled");
}

function stopwatch(){
    if(timer == true){
        msec = msec + 1

        if(msec == 100){
            sec = sec + 1 ;
            msec = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let minsecString = msec;

        if (hr<10){
            hrString = "0" + hrString
        }


        if (min<10){
            minString = ":0" + minString
        }

        if (sec<10){
            secString = ":0" + secString
        }

        if (msec<10){
            minsecString = ":0" + minsecString
        }
        document.getElementById("hr").innerHTML =  hrString
        document.getElementById('min').innerHTML = minString
        document.getElementById('sec').innerHTML = secString;
        document.getElementById("msec").innerHTML = minsecString;
        setTimeout("stopwatch()",10);
    }
}


// Current time
setInterval(ele =>
    {let date = new Date();
    let inp = document.getElementById("CurrentTime");
    inp.value = `Time ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
},1000)



setInterval(ele =>{
    let date = new Date();
    let inp2 = document.getElementById("CurrentDate");
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[date.getMonth()];
    inp2.value =`Date ${date.getDate()} ${name} ${date.getFullYear()}`
    // console.log(inp2) 
},1000)
