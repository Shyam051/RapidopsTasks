// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​ array.
static_array = [0,1,2,3,4,5,6,7,8,9]
// Output = [4,1,5,2,3,0,6,8,9,7]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(static_array);
alert(static_array);
  