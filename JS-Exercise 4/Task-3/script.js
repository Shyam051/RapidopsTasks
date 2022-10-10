let countId = 0;
let userInputs = [];
let latestId = 0;
let renderArrObjs = [{firstName:"Rohit",lastName:"Sharma"},
{firstName:"KL",lastName:"Rahul"},
{firstName:"Virat",lastName:"Kohli"},
// {firstName:"Surya",lastName:"Yadav"},
// {firstName:"Rishab",lastName:"Pant"},
// {firstName:"Hardik",lastName:"Pandya"},
// {firstName:"Harshal",lastName:"Patel"},
// {firstName:"Ravi",lastName:"Bisnoi"},
// {firstName:"Yuzi",lastName:"Chahal"},
// {firstName:"Jasprit",lastName:"Bumrah"},
{firstName:"Buvi",lastName:"Kumar"},]


function add(){
    let firstVal = document.getElementById("firstName").value
    let lastVal = document.getElementById("lastName").value
    
    if (firstVal.trim() == "" || lastVal.trim() == "") alert("invalid input");
    else{
        let tempObj = updateObject(firstVal, lastVal);  
        if (tempObj) createele(tempObj);

        console.log(userInputs);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
}

function updateObject(firstName, lastName){
    if (userInputs.find(ele => ele.firstName == firstName && ele.lastName == lastName)){
        alert("User already Exist");
        return;
    }else{
        latestId++;
        let tempObj = {
            id:latestId,
            firstName: firstName,
            lastName: lastName
        }
        userInputs.push(tempObj)
        return tempObj;
    }
}

function createele(obj){
   
    let resultContainer = document.getElementById("container");
    let row = document.createElement('div');
    row.className = "row";
    row.id = obj.id
    resultContainer.appendChild(row)
    
    let col1 = document.createElement('div');
    col1.className = 'col';
    let inp = document.createElement('input');
    inp.className = 'form-control';
    inp.id = `${obj.id}-${obj.firstName}`;
    inp.placeholder = obj.firstName
    col1.appendChild(inp);
    row.appendChild(col1);
    console.log(inp);
    
    let container = document.getElementById("container");
    container.appendChild(row);
    
    let col2 = document.createElement('div');
    col2.className = "col";
    let inp2 = document.createElement('input');
    inp2.className = 'form-control';
    inp2.id = `${obj.id}-${obj.lastName}`
    inp2.placeholder = obj.lastName;
    col2.appendChild(inp2);
    row.appendChild(col2);
    
    let col3 = document.createElement('div');
    col3.className = 'col';
    let editbtn = document.createElement('button');
    editbtn.className = 'btn btn-success';
    editbtn.addEventListener("click", () => editdata(obj.id));
    let editbtnText = document.createTextNode("Edit");
    editbtn.appendChild(editbtnText);
    let delbtn= document.createElement('button');
    delbtn.className ="btn btn-danger";
    delbtn.addEventListener("click", () => deletedata(obj.id));
    let delbtnText = document.createTextNode("Delete");
    delbtn.appendChild(delbtnText);
    col3.appendChild(editbtn);
    col3.appendChild(delbtn);
    row.appendChild(col3);
}
// createele();

function deletedata(id){
    let del = document.getElementById(id)
    del.remove()
    let index = userInputs.findIndex(details => details.id == id )
    userInputs.splice(index,1);
}

function editdata(id){
    let update = document.getElementById("addbtn");
    update.className = "btn btn-warning";
    update.id = "updatebtn"
    update.innerHTML = "Update";
    update.setAttribute("onclick",`updateUserInputs(${id})`)
    userInputs.map(ele =>{
        if(ele.id == id){
            document.getElementById("firstName").value = `${ele.firstName}`;
            document.getElementById("lastName").value = `${ele.lastName}`
        }
    })
};

function updateUserInputs(id){
    let firstVal = document.getElementById("firstName").value
    let lastVal = document.getElementById("lastName").value    
    userInputs.map(ele => {
        if (ele.id == id){
            document.getElementById(`${ele.id}-${ele.firstName}`).placeholder = firstVal;
            document.getElementById(`${ele.id}-${ele.lastName}`).placeholder = lastVal;

            ele.firstName = firstVal; 
            ele.lastName = lastVal;
        }
    })
    let add = document.getElementById("updatebtn");
    add.className = "bi bi-plus-circle btn btn-outline-primary";
    add.id = 'addbtn';
    add.innerHTML = 'Add';
    add.setAttribute("onclick",'add()');
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
}
let count = 0
function render(){
    count ++
    if(count == 1){
    renderArrObjs.map(ele=>{
        latestId++
        let tempObj ={
            id : latestId,
            firstName : ele.firstName,
            lastName : ele.lastName
        }
        userInputs.push(tempObj)
        createele(tempObj)
    })
}else{
    document.getElementById("container").remove();
    let parentContainer = document.getElementById("parent-container");
    let child = document.createElement("div");
    child.className = "container";
    child.id = "container";
    parentContainer.appendChild(child);
    userInputs.map(ele => {
        createele(ele);
    })
}    
}