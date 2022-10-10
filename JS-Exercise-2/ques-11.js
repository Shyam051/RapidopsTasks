// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).
function insertString(static_string, input_string, input_position) {
    if(typeof(input_position) == "undefined") {
        input_position = 0;
    }
    return static_string.slice(0, input_position) + input_string + static_string.slice(input_position);
}

let static_string = "This is a sample string"
let input_string = "Insert me"
let input_position = 3

let result = insertString(static_string,input_string,input_position )
alert(result);
