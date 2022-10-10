// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​ with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.

let static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ]
// Input = 2
// console.log(num_string_range('a',​ ​ "z",​ ​ 2));
// Output = ["a",​ ​ "c",​ ​ "e",​ ​ "g",​ ​ "i",​ ​ "k",​ ​ "m",​ ​ "o",​ ​ "q",​ ​ "s",​ ​ "u",​ ​ "w",​ ​ "y"]

function num_string_range(start, end, skip){
    let result = [];
    let startIndex = static_array.indexOf(start);
    let endIndex = static_array.indexOf(end);
    let sample = static_array.slice(startIndex, endIndex);
    for (let i = 0;i<sample.length;i = i + skip){
        result.push(sample[i]);
    }
    return (result);
}

let output = num_string_range('a','z',2);
alert(output);