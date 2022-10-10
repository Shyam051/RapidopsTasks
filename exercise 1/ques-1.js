let userInput = +prompt("Enter No. of rows",5)
string = ""
for (let i = 0; i<= userInput;i++){
    for (let j = 0; j < userInput;j++){
        if((i === j) || (( i + j) === userInput-1)){
            string += "*";
        }else{
            string += " ";
        }
    }
    {string += "\n"}
}
console.log(string);