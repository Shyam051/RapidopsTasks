// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​ ​:

// 1.​ ​ Id,​ ​
// 2.​ ​ Name,​ ​
// 3.  Age

// NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.

arr = [{id:1, Name:"Ram", Age:50},
{id:2, Name:"Mesi", Age:15},{id:3, Name:"Suresh", Age:25},{id:4, Name:"Ajay", Age:34},{id:5, Name:"Jay", Age:21},{id:6, Name:"Aniket", Age:23},{id:7, Name:"Manan", Age:11},{id:8, Name:"Hitesh", Age:40},{id:9, Name:"Dhoni", Age:36},{id:10, Name:"Virat", Age:18}]

function sorting(){
    let Userinp = +prompt("Press 1 sort by Age or Press 2 to sort by Name");
    if(Userinp == 1){
        Agesorting(arr)
        alert("please check console and don't press Ok")
    }else if(Userinp == 2){
        Namesorting(arr)
        alert("please check console and don't press Ok")
    }else{
        alert("invalid input")
    }
}
function Agesorting(arr){
    console.log(arr.sort((a, b) => (a.Age > b.Age) ? 1 :((a.Age < b.Age) ?-1:0)))
}

function Namesorting(arr){
    console.log(arr.sort((a, b) => (a.Name < b.Name) ? 1 : (a.Name > b.Name) ? -1 :0))
}
// arr.sort(sorting);
