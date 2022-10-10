// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​ differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.

// Input = 01-07-2018 & 03/05/2020
// timeDiff("07/01/2018","05/03/2020");

function timeDiff(inpDate1,inpDate2){
    let date1 = new Date(inpDate1).getTime();
    let date2 = new Date(inpDate2).getTime();

    diff = (date2 > date1) ? new Date(date2 - date1) : new Date(date1 - date2);
    let newDateArr = [diff.getDate(),diff.getMonth() + 1,diff.getFullYear()]
    alert(newDateArr)

    let dayDifference = Number(Math.abs(newDateArr[0]) - 1);
    let monthDifference = Number(Math.abs(newDateArr[1]) - 1);
    let yearDifference = Number(Math.abs(newDateArr[2]) - 1970);
    
    let total_days = Math.floor((yearDifference * 365) + (monthDifference * 30.417) + dayDifference);
    let total_months = yearDifference * 12 + monthDifference;
    let total_weeks = Math.floor(total_days/7);
    let total_weeks_extra_days = (total_days%7);
    
    let result = yearDifference + " years " + monthDifference + " months " + dayDifference +" days \n" 
    + "or " + total_months + " months " + dayDifference +" days\n"
    + "or " + total_weeks + " weeks " + total_weeks_extra_days + " days\n"
    + "or " + total_days +" days\n"
    + "or " + total_days * 24 +" hours\n"
    + "or " + total_days * 24 * 60 +" mins\n";
    alert(result)
}