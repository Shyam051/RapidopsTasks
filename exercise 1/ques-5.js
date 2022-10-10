let Str = "";
let userInput = +prompt("Enter No.: \nDefault: 5",5);
for (let i=0;i<userInput;i++){
    for (let k=0;k<i;k++){
        Str +=' '
    }
    for (let j=0;j<userInput-i;j++){        
        Str += i + j + 1 +" ";
    }
    if (i == userInput -1) break;
    Str += "\n" 
}
for (let i=0;i<userInput;i++){
    for (let k=userInput-1;k>i;k--){
        Str += ' ';
    }
    for (let j=0;j<=i;j++){
        if (i == 0 && j == 0) break;
        Str += userInput - i + j +" ";
    }
    if (i == userInput -1) break;
    Str += "\n" 
}
console.log(Str)