let countId = 0;
let userInputs = [];
let latestId = 0;


function add(){
    let firstVal = document.getElementById("firstName").value
    let lastVal = document.getElementById("lastName").value
    if (firstVal.trim() == "" || lastVal.trim() == "") alert("invalid input");
    else{
        let tempObj = updateObject(firstVal, lastVal);  
    if (tempObj) createele(tempObj);
    let selectallchk = document.getElementsByName("SelectAllCheckbox")
    console.log(selectallchk)
    if(selectallchk[0].type =='checkbox'){  
    selectallchk[0].checked=false;
    };
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
    
    let col0 =document.createElement('div');
    col0.className ='col-md-1';
    col0.style.width = 'auto';
    let check = document.createElement('input');
    check.className = 'form-check-input';
    check.type = 'checkbox';
    check.id = 'checkboxNoLabel'
    check.name = 'chk'
    check.addEventListener("click",chkclicked)
    col0.appendChild(check);
    row.appendChild(col0);


    let col1 = document.createElement('div');
    col1.className = 'col';
    let inp = document.createElement('input');
    inp.className = 'form-control';
    inp.id = `${obj.id}-${obj.firstName}`;
    inp.placeholder = obj.firstName
    col1.appendChild(inp);
    row.appendChild(col1);
    // console.log(inp);
    
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


function selectALL(){
    let checkboxes = document.getElementsByName('chk');

    for(var i=0; i < checkboxes.length; i++){ 
        if(checkboxes[i].checked == false){
            if(checkboxes[i].type =='checkbox')  
                checkboxes[i].checked=true;
                let text = document.getElementById("selectedText");
                text.innerHTML = `${checkboxes.length}`  
        }else if(checkboxes[i].checked == true){
            if(checkboxes[i].type =='checkbox')  
                checkboxes[i].checked=false;
                let text = document.getElementById("selectedText");
                text.innerHTML = `0`;
        }
        let deletebtn = document.getElementById("SelectallDeletebtn");
        deletebtn.removeAttribute('disabled');   
    }  
}

function selectallDelete(){
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked'); 
    for (let checkbox of markedCheckbox) {  
      let parent = checkbox.parentNode.parentNode;
      if(parent.id == 'row-1'){
        continue
      }else{
        deletedata(parent.id);
        chkclicked()
      }
    }
}
let checkCheckbox;
function chkclicked(){
    checkCheckbox = document.querySelectorAll('[name="chk"]:checked');
    let selectedText = document.getElementById('selectedText');
    selectedText.innerHTML = `${checkCheckbox.length}`;
    deleteBtnDisable()
   
    let selectallchk = document.getElementById("SelectAllCheckbox");
    if(checkCheckbox.length == userInputs.length){
        selectallchk.checked = true;
    }
    // console.log(checkCheckbox);
    else if(userInputs.length == 0){
        // if(userInputs.length == 0){
            selectallchk.checked = false;
            console.log("false");
            selectedText.innerHTML = `${0}`
            
        }
        else{
            selectallchk.checked = false;
    }
    }
// }

function deleteBtnDisable(){
    console.log(checkCheckbox.length);
    if(!checkCheckbox.length == 0){
        let deletebtn = document.getElementById("SelectallDeletebtn");
        deletebtn.disabled = false;
    }else{
        let deletebtn = document.getElementById("SelectallDeletebtn");
        deletebtn.disabled = true;
    }
}
