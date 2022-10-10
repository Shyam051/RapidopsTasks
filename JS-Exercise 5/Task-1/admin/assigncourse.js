

let user_records = new Array();
user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
user_records.filter((item)=>{ if(item.userType == 'user'){
    displayStudents(item.username, item.id)
}})
    
function displayStudents(key, id){
    let students = document.getElementById("studentsDetails");

    let p = document.createElement('p')
    p.id = `studentsName${id}`
    // p.className = 'col-3'
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'
    btn.style.marginBottom = "15px"
    students.appendChild(p);
    students.appendChild(btn)
    btn.innerHTML = "click <br>"
    btn.setAttribute("data-bs-toggle","collapse")
    btn.setAttribute("data-bs-target",`#id${id}`)

    p.innerHTML = `${key}<hr>`;
    let data = []
    data = JSON.parse(localStorage.getItem('courses'))?JSON.parse(localStorage.getItem('courses')):[]
    for(let course in data){
        courseDetails(course, id, data)
    }
}

function courseDetails(course, id, data){
    let courseDetails = document.getElementById(`studentsName${id}`);
    let row = document.createElement('div');
    row.className = 'row';
    let col = document.createElement('div');
    col.className = 'col collapse';
    col.id = `id${id}`;
    col.innerText = course;

    let user_name = user_records.find(ele => ele.id == id)


    let addBtn = document.createElement('button');
    // console.log(user_name.username)
    // console.log(data[course].includes(user_name.username))
    // data.filter()
    if (data[course].includes(user_name.username)){
        addBtn.className = "btn-danger ms-3 mb-5"
        addBtn.id =`${course}${id}`
        addBtn.innerText = "REMOVE"
        addBtn.onclick = ()=>{removeCourse(course, id)}
    }else{
        addBtn.className = "btn-primary ms-3 mb-5"
        addBtn.id =`${course}${id}`
        addBtn.innerText = "ADD"
        addBtn.onclick = ()=>{addCourse(course, id)}
    }


    // addBtn.addEventListener("click",()=>addCourse(course, id))
    col.appendChild(addBtn)
    courseDetails.appendChild(row);
    row.appendChild(col)

}


function addCourse(course,id){
    data = JSON.parse(localStorage.getItem('courses'))?JSON.parse(localStorage.getItem('courses')):[]
    let user = user_records.filter((ele)=> ele.id == id)
    if(data[course].includes(user[0].username)){
        alert("Course is already asigned")
    }else{
        data[course].push(user[0].username);
        console.log("added",data[course]);
        localStorage.setItem("courses",JSON.stringify(data));
        let addBtn = document.getElementById(`${course}${id}`);
        addBtn.innerText = "Remove";
        addBtn.className = 'btn-danger ms-3 mb-5';
        // addBtn.id = `${course}${id}`;
        // addBtn.setAttribute('onclick',`removeCourse(${course},${id})`)
        addBtn.onclick = ()=>{removeCourse(course, id)}
    }
} 

function removeCourse(course,id){
    data = JSON.parse(localStorage.getItem('courses'))?JSON.parse(localStorage.getItem('courses')):[]
    let user = user_records.filter((ele)=> ele.id == id)
    if(data[course].includes(user[0].username)){
        let index = data[course].indexOf(user[0].username);

    data[course].splice(index,1);
    
    console.log("deleted",data[course]);
    localStorage.setItem("courses",JSON.stringify(data));
    let addBtn = document.getElementById(`${course}${id}`);
    addBtn.innerText = "ADD";
    addBtn.className = 'btn-primary ms-3 mb-5';
    // addBtn.id = `${course}${id}`;
    addBtn.onclick = ()=>{addCourse(course, id)}
    // addBtn.setAttribute("onclick",`addCourse(${course}, ${id})`)
    console.log("removed");
    }else{
        alert("Course is not assigned")
    }
    
}
function logout(){
    window.location.href = "../Login/login.html";
}