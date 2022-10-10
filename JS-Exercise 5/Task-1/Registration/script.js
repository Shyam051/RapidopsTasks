
function registrationSave(){
    let username = document.getElementById("username").value;
    let password1 = document.getElementById("Password1").value;
    let password2 = document.getElementById("Password2").value;

    if(password1 != password2){
        alert("Password are not Same")
    }
    else{
    let Usertype = document.querySelector('input[name="typeOfUser"]:checked');
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    if(user_records.some((item)=>{return item.username == username})){
        alert("Username already exits!!")
    }else{
        user_records.push({
            "id": Math.floor(Math.random() * 100),
            "username": username,
            'password1': password1,
            'userType': Usertype.id,
        })  
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}
}