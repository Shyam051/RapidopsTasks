let arr = []
// selecting all checkboxes on click all
function selectall(e){
    let checkboxes = document.getElementsByName("checkbox");

    if(e.checked){
        for(let i=0;i<checkboxes.length-1;i++){
            checkboxes[i].checked = true;
            if(arr.includes(checkboxes[i].id)==false){
                arr.push(checkboxes[i].id)
            }
        }
        console.log(arr)
    }else{
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].checked = false;
            arr.length = 0;
        }
        console.log(arr)
    }
}


let id = document.getElementById("id");
// on clicking very checkbox this function will run
function OptionsSelected(me)
{   
    // checks if checkboxe is checked or not
    if(me.checked == true){
        arr.push(me.id)
        if(arr.includes(id.id)==false){ // checks if id is present in array, if not it will add.
            arr.push(id.id);
            id.checked = true;
        }
        // if(me.checked == id)
        console.log(arr);
     }else{   
        if(me.id == id.id){
            arr.forEach(ele => {document.getElementById(ele).checked = false
            })
            arr.length = 0
            }
            let index = arr.indexOf(me.id);//removing from array
            arr.splice(index,1);
            console.log(arr)
        }
    if(arr.length == 4){ // turning on 'all' checkedbox
        let all = document.getElementById("all")
        all.checked = true
    }else{
        let all = document.getElementById("all")
        all.checked = false
    }
}
