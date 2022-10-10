let div2colors = ["Tomato","Orange","DodgerBlue","MediumSeaGreen"];
let div4colors = ["#ffff00","#ff0000","#00dae4","#aa00ff"]

function boxes(){
    let mainboxes = document.getElementById("boxes");
    mainboxes.style.visibility = "visible";
}


// Changing color of div 2

let i =0
setInterval(function div2color(){
        let divtwo = document.getElementById("div2");
        divtwo.style.backgroundColor = div2colors[i];
        if(i == div2colors.length){
            i=0;
        }else{
            i++
        }
}
,3000)

let j=0;
function div4color(){
    let divtwo = document.getElementById("div4");
    divtwo.style.backgroundColor = div4colors[j];
    if(j == div4colors.length){
        j=0;
    }else{
        j++
    }
}
function div1(){
    let div3Ptag = document.getElementById("div3Text");
    newptag = document.createElement('p');
    newptag.innerHTML = "Oops!";
    div3Ptag.appendChild(newptag);

    setInterval('div4color()',5000)
}

document.onkeydown = function keypress(event){
    div4color()
    console.log(event.keyCode)
        switch (event.keyCode) {
            case 37:
            case 40:
                if(j == div4colors.length){
                    j=0;
                }else{
                    j++
                }
            break;
           case 38:
           case 39:
            if(j < 0){
                j=4;
            }else{
                j--
            }
              break;
           
        }
     };
