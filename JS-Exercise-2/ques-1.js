// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​ last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.

let static_array = [0,1,2,3,4,5,6,7,8,9]
function firstLastEle(){
    let n = prompt("enter No. to get the first 'n' elements of the array and last 'n' elements of the [0,1,2,3,4,5,6,7,8,9]")
    firstele = static_array.slice(0,n);
    lastele = static_array.slice(-n);
    alert( `First ${n} element: ${firstele}, Last ${n} element: ${lastele}.`)
}


// let out = firstLastEle(3);
// alert(out);