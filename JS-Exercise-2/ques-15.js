// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​ object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.

static_array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ]

// Input : ask user to delete or insert
// delete_element_position = 2  OR insert_element_position = 3
// insert_name = "Daniel"
// insert_age = "56"

// Output : if deleted
// [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12}]
// if inserted
// [  {name:  "Jack" , age : 23} , {name:  "Sam" , age : 12} ,  {name:  "Max" , age : 20} , {name:  "Daniel" , age : 56} ]

let choice =  prompt ("Enter your choice 'delete' or 'insert'",'')
choice.toLowerCase()
if(choice == 'delete'){
    let delPos = +prompt("Enter Position to delete",'')
    if(delPos > (static_array.length)){
        alert("Position does not exits")
    }else{
        static_array.splice(delPos,1)
        console.log(static_array)
    }
}else if(choice == 'insert'){
    let instPos = +prompt("Enter Position to insert",'')
    if (instPos > (static_array.length)){
        alert("Position does not exits")
    }else{
        let name=prompt("Enter name:",'')
        let age=prompt("Enter age:")
        let newObject = {
            name :name ,
            age : age
        }
        static_array.splice(instPos,0,newObject)
        console.log(static_array)
    }
}