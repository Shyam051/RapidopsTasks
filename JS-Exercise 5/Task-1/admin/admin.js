// Taking Input from user and saving data on localStorage
// let courses = new Object();
function saveCourse(){
    let CourseName = document.getElementById("CourseInp").value;
    let data = JSON.parse(localStorage.getItem('courses'))?JSON.parse(localStorage.getItem('courses')):{};
    if(!(CourseName in data)){
        data[CourseName] = []
        localStorage.setItem('courses',JSON.stringify(data));
        console.log(localStorage.getItem('courses'))   
        displayCourse(CourseName)
    }else alert("Course already exists!!")

}

//Displaying data from localStorage to the admin window
let data = []
data = JSON.parse(localStorage.getItem('courses'));
console.log(data)  
for(let key in data){
    displayCourse(key)
}

function displayCourse(key){
    let courseDiv = document.getElementById("course");
    let p = document.createElement('p')
    p.style.width = "80%"
    let btn = document.createElement('button')
    btn.style.marginBottom = "15px"
    courseDiv.appendChild(p);
    courseDiv.appendChild(btn);
    p.innerHTML = key
    btn.innerHTML = "Assign Course";
    btn.addEventListener('click',()=>assignCourse())
}

function assignCourse(){
    // console.log("assign")
    window.location.href = "assigncourse.html"
}
function logout(){
    window.location.href = "../Login/login.html";
    // localStorage.removeItem("username")
}

