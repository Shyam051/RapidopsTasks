let arr = ["Ashish Shah",
    'Rashmin Chhatrala',
    'Yash Dubey',
    'Prakash Jain',
    'Yashraj Singh',
    'Viraj Sinha',
    'Rajesh Kumar',
    'Mahesh Marwadi',
    'Suresh Sahni',
    'Amar Vilas',
    'Virdas Singhania',
    'Rajeshwari Bindra',
    'Birendra Bhalerao',
    'Virendra Bhupati',
    'Bhupendra Singh',
    'Bhuvam Bam',
    'Shri Raj',
    'Prashant Kamle',
    'Kamlesh Tomar',
    'Risabh Khare',
    'Rishi Kohli',
    'Kunwar Kharwanda',
    'Kartik Koli',
    'Komal Jain',
    'Kartikey Pandey']

let results
let text


document.getElementById("inp").onkeyup = function search(e){
    let inpValue = e.target.value;
    document.getElementById("result").innerHTML = ""
    if (inpValue.length > 1){
        regex = new RegExp(inpValue,"gi")
        console.log(e.target.value);
        for(let i=0; i< arr.length; i++){
            if ([...arr[i].matchAll(regex)].length != 0){
                results = document.getElementById("result");
                text = document.createElement("p");   
                let newText = highlight(arr[i], inpValue)
                console.log("Text", [...arr[i].matchAll(regex)])     
                text.innerHTML = newText
                text.id = "names"
                results.appendChild(text);
            }
            if(inpValue==''){
                document.getElementById("result").innerHTML = ""
            }
            
        }
    }
    
}

function highlight(text, input){
    let index = [...text.matchAll(regex)][0].index;
    let len  = input.length + index;
    console.log(index, len)
    let newa = text.split("")
    newa.splice(index,0,"<mark>")
    newa.splice(len+1,0,"</mark>")
    // console.log
    // console.log(newa.join(""));
    return newa.join("");
}