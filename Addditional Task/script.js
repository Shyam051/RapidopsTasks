let string 
function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];

  if (f) {
      var r = new FileReader();
      r.onload = function (e) {
          var contents = e.target.result;
          string = contents
          document.getElementById("ReadResult").innerHTML = contents;
      }
      r.readAsText(f);
  } else {
      alert("Failed to load file");
  }
}

document.getElementById('fileinput').addEventListener('change', readSingleFile, false);


function extractFieldNames(){
  let arr = []
  let tempNonLables = []
  let tempNonLables2 = [];
  let nonLables = [];
  let regex = /[^<%=%>]+/g
  let regex3 =/\.[a-zA-Z0-9_]+/g
  
  let regex5 = /%> [a-zA-z-]+ <%/g 
  let regex6 = / [a-zA-Z-]+ /g
  let regex7 = /"[\w-]+"/g // Export arr Elements matching..

  let elements = document.getElementsByTagName("div");
  for (let i=1;i<elements.length;i++){
      if(elements[i].lastElementChild != null){
        arr.push(elements[i].lastElementChild.innerText)
      }
  } 
  // console.log(arr)

    for(let i=0;i<arr.length;i++){
      if(arr[i].match(regex5)){
        let temp2 = (arr[i]);
        tempNonLables.push(temp2.match(regex5));
      }
    }
    tempNonLables = tempNonLables.flat()
    for(let i=0;i<tempNonLables.length;i++){
      if(tempNonLables[i].match(regex6)){
        let temp3 = (tempNonLables[i]);
        temp3.trim()
        tempNonLables2.push(temp3.match(regex6));
      }
    }
    tempNonLables2 = tempNonLables2.flat()
    // console.log(tempNonLables2)
    
  let arr2=[]
  for (let i=0;i<arr.length;i++){
      if (arr[i].match(regex)){
          let temp = (arr[i]);
          arr2.push(temp.match(regex));
      }
    }
arr2 = (arr2.flat())
// console.log("hi",arr2)

  for (let i=0; i<arr2.length ;i++){
    if (arr2[i].match(regex3) != null) {
      nonLables.push(arr2[i].match(regex3)[0].slice(1)) 
    }
  }
  // console.log(new Set(tempNonLables2))
  // console.log(new Set(nonLables))



  let arrlabel= []
  let elementslabel = document.getElementsByTagName("label");
  for (let i=0;i<elementslabel.length;i++){
        arrlabel.push(elementslabel[i].innerText);
  
        
        // ExportArray Elements
        let val = string.search("ExportFields")
        let end = string.indexOf("]", val);
        let substr = string.slice(val,end + 1);
        let exportArr = []
        // console.log(substr);
        
        exportArr.push(substr.match(regex7).map(ele => ele.slice(1, ele.length-1)));
        
        exportArr = (exportArr.flat());
        // console.log(exportArr)

  // concatenating both
  let finalArr = [].concat(arrlabel,nonLables,tempNonLables2,exportArr);
  let tempSet = new Set(finalArr);
  let final = Array.from(tempSet);
  var newFinal = new Set(final.map((ele)=> ele.trim().toLowerCase()));
  newFinal = Array.from(newFinal)
  
}
console.log(newFinal);
// console.log(typeof(substr));

}
setTimeout(()=>extractFieldNames(),5000);
