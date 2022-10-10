// Task 1 :
// Write​ ​ a ​​ pattern​ ​ that​ ​ can identify an​ ​ e-mail​ ​ address.
/^ ([a-zA-Z\d\.-]+) @ ([a-zA-Z\d-]+) \. ([a-z]{2,8}) $/


// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. The number of star will be equal to the number of characters hidden, and make this program dynamic.

// Input : abcdef@mail.com
// Output :  ab***f@mail.com​

let input = document.getElementById("email");
let patterns = {email : /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})$/}
function hideemail(mail) {
    let hideMail = "";
    for (i = 0; i < mail.length; i++) {
      if (i > 1 && i < (mail.indexOf("@")) -1 ) {
        hideMail += "*";
      } else {
        hideMail += mail[i];
      }
    }
    let div = document.getElementById("para");
    div.textContent = (hideMail);
}


//validation Function 
function validate(field,regex){
    if(regex.test(field.value)){
        let mail = field.value;
        hideemail(mail);       
    }
    // console.log(regex.test(field.value));
};

input.addEventListener("keyup",(e)=>{
    validate(e.target,patterns['email'])
});



// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.

// Input : '<p><strong><em>Javascript​ ​ Exercises</em></strong></p>'
// Output : Javascript​ Exercises
function removeHtmlTag(str){
  let ele = document.getElementById("q-3");
  ele.innerHTML = str
}
removeHtmlTag(prompt("Enter HTML/XML tags",''));



// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​ by accepting​ ​ row and ​ column​ ​ numbers​ ​ from​ ​ the user,​ ​ and​ ​ input​s ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell.
function CreateTable(row,col){
  let table = document.createElement('table');
  for (let i = 0; i < row ; i++){
    let newrow = document.createElement('tr');
    // let newrowText = document.createTextNode(`Row-${i}`);
    table.appendChild(newrow);
    // newrow.appendChild(newrowText);
    for(let j = 0; j < col; j++){
      let newcol = document.createElement('td');
      let newcolText = document.createTextNode(`Row-${i} Col-${j}`);
      newrow.appendChild(newcol);
      newcol.appendChild(newcolText);
      newcol.style.border = "2px solid black"
    }
  }
  table.style.border = "2px solid black"
  let div = document.getElementById("q-4");
  div.appendChild(table);
}
CreateTable(+prompt("enter No. of rows",3),+prompt('enter No. of rows',3));



// Task 2 :
// Write​ ​ a ​ ​ JavaScript​ ​ program ​ that​ ​ displays​ ​ a list​ ​ of​ ​ names​ ​ according​ ​ to​ ​ the sports ​ group.
let data = [{
  Name:'Ravindra',
  Sports: ['Chess', 'Cricket'],
  },

{

  Name:'Ravi',
  Sports: ['Cricket', 'Football'],

},

{

  Name:'Rishabh',
  Sports: ['Table-Tennis', 'Football'],

},]
let map = new Map();
data.map(ele=>{
  ele.Sports.map(SportsEle=>{
    if(!map.has(SportsEle)){
      map.set(SportsEle,[]);
      map.get(SportsEle).push(ele.Name);
    }
    let value = map.get(SportsEle);
    if (!value.includes(ele.Name)) value.push(ele.Name)
  })
})
let result = Array.from(map,([key,value])=>{
  return {[key]: value};

});
alert(JSON.stringify(result))

// NOTE: ​Taken help from Saumya.

// Expected​ ​ output​ :
// [{ Chess:​ ​ [‘Ravindra’] }, { Cricket:​ [‘Ravindra’,'Ravi'] }, { Football:​ ​ [‘Ravi’,​ ​ ‘Rishabh’] }, { Table-Tennis:​ ​ [‘Rishabh']}]

