// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.

// Output = 1,023,165,454,197

function thousandSeparator(num){
    let newArr = num.toString().split("").reverse()
    for (let i=0; i<newArr.length; i = i + 4){
        newArr.splice(i,0,",");
    }
    let result = newArr.reverse().slice(0,newArr.length-1).join("")
    return result
}
input_number = 1023165454197

let newNo = thousandSeparator(input_number);
alert(newNo);