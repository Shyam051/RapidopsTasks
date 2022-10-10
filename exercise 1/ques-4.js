let userInput = +prompt("Enter No. of rows",5)
string = ""
for (let i = 1; i <=userInput;i++){
    for (let j = 0; j < i;j++){
        string += "*";
    }
    string += "\n";
}
// console.log(string);
for (let i =1; i<= userInput-1;i++){
    for(let j = 0; j < userInput-i ; j++){
        string +="*"
    }
    string +="\n"
}
console.log(string);
