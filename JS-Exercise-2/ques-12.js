// Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​ into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

// input_length = 2
// input_string = "RapidOpsSolution"
// console.log(string_chop('RapidOpsSolution’',2));
// Output = ["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”]



function chopString(input_string,input_length){
    let result = [];
    for (let i=0;i<input_string.length - input_length;i = i + input_length){
        result.push(input_string.slice(i,i+input_length))
    }
    return (result);
}
let output = chopString("RapidOpsSolution", 2);
alert(output);