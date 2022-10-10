// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​ name​ ​ from​ ​ a ​ ​ particular​ ​ date.

// Input = 01-07-2020 or 01/07/2020
// Output = July

function getMonthName(In){
    let input = In.split("-").reverse().join(",")
    let monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date(input)
    let name = monthsName[date.getMonth()]
    return(name)
}

let Input =  prompt("Enter Date") //'01-07-2020'
let result = getMonthName(Input);
alert(result)
