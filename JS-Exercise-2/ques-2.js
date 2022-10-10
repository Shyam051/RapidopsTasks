// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​ ​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.

// Input = 02544168
// Output = 0-254-416-8

let userInput = prompt("Enter No.")
let result = [userInput[0]];
// alert(result)
for(let i=1; i<= userInput.length;i++){
    if((userInput[i - 1] % 2 === 0) && (userInput[i] % 2 === 0)){
        result.push("-", userInput[i]);
    }
    else{
        result.push(userInput[i]);
    }
}
console.log(result.join(''));