let string = "";
let userInput = +prompt("Enter length: \nDefault: 5",5);

for (let i=1;i<userInput;i++){
    for (let j=userInput;j>i;j--){
        string += " "
    }
    for (let k=0;k<i*2-1;k++){
        if (k===0 || k === 2*i-2){
            string += "*"
        }else{
            string += " "
        }
    }
    string += "\n"
}

for (let i=1;i<=userInput;i++){
    for (let j=0;j<i;j++){
        string += " "
    }
    for (let k=(userInput - i) * 2 - 1;k>=1;k--){
        if (k===1 || k === (userInput-i) * 2-1){
            string += "*"
        }else{
            string += " "
        }
    }
    string += "\n"
}
console.log(string)


// let n = 5;
// string= ""
// for(let i=0; i<=2; i++){
//     for (let j=0; j<=4; j++){
//         if((i+j===2)|| ((i<j) && ((i+j === 4 && (i!=0)) ||(i+j === 6) ))){
//             string += "*";
//         }else{
//             string += " ";
//     }
// }
// {string +="\n"}
// }

// for(let i=2; i<=4; i++){
//     for(let j=0; j<=4; j++){
//         if((i+j === 6) || ((i>j) && ((i+j) === 2)) || ((i>j) && (j!=0 && (i+j) === 4)) || ((i>j) && (j!=0 && (i+j===4)))){
//             string += "*";
//         }else{
//             string +=" ";
//         }
//     }
//     string +="\n"
// }
// console.log(string);