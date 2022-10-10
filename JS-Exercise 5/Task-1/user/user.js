
//Displaying data from localStorage to the user window
let data = []
let courses = []
data = JSON.parse(localStorage.getItem('courses'));
for(let key in data){
if (data[key].includes(localStorage.getItem("username"))){
    displayCourse(key)
}
console.log(courses);
    displayCourse(courses)
}

function displayCourse(key){
    let courseDiv = document.getElementById("course");
    let p = document.createElement('p')
    // p.style.borderBottom = "1px solid"
    courseDiv.appendChild(p);
    p.innerHTML = key
}

let usernameSpan = document.getElementById("usernameSpan");
usernameSpan.innerHTML = `${username}`;


function logout(){
    window.location.href = "../Login/login.html";
    localStorage.removeItem("username")
}

