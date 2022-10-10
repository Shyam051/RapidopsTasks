// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​ timestamp​ ​ to​ ​ time.

// Output = Wednesday, December 9, 2020 6:28:38 PM GMT+05:30

function time(inputTime){
    let newTime = new Date(inputTime * 1000)
    return newTime
}

Input = 1607518718
let output = time(Input);
alert(output);