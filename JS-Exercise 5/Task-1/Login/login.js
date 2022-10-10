
function login(){
    let username = document.getElementById("username").value;
    let password1 = document.getElementById("Password1").value;

    let Usertype = document.querySelector('input[name="typeOfUser"]:checked');
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    if(user_records.some((item)=>{return item.username == username && item.password1 == password1 && item.userType == 'admin'})){
        // alert("Login Successful");
        window.location.href="../admin/admin.html"
    }else if(user_records.some((item)=>{return item.username == username && item.password1 == password1 && item.userType == Usertype.id})){
        localStorage.setItem('username',username)
        window.location.href="../user/user.html"

    }
    else{
        alert("Login Failed");
    }
}
