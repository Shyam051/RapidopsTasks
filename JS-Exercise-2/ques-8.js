// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​ between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.

Input = 01/07/2018 & 03/05/2020
// Output = 1 year 10 months 2 days

function DateDifference(date1, date2){

    let inputDate1 = new Date(date1).getTime();
    let inputDate2 = new Date(date2).getTime();

    diff = (inputDate2 > inputDate1) ? new Date(inputDate2 - inputDate1) : new Date(inputDate1 - inputDate2);

    const dateArray = [diff.getDate(), diff.getMonth() + 1, diff.getFullYear()];
    
    const differenceDay = Number(Math.abs(dateArray[0]) - 1);
    const differenceMonth = Number(Math.abs(dateArray[1]) - 1);
    const differenceYear = Number(Math.abs(dateArray[2]) - 1970);

    const result = differenceYear + " years " + differenceMonth + " months " + differenceDay +" days ";
    return(result)
}
let output = DateDifference("07/01/2018","05/03/2020")
alert(output);