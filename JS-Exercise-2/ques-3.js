// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​ frequent​ ​ item​ ​ of​ ​ an​ ​ array.

static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9]
// Output = 5

function findMostFrequentItem(arr){
    let start = 0;
    let end = 1;
    let max = 0;
    let maxElement;
    while (arr.length >= end){

        if (arr[start] != arr[end]){
            let newmax = Math.max(max,end - start);
            if (newmax != max){
                maxElement = arr[start+1];
            } 
            max = newmax;
            start = end;
        }
        end++;
        
    }
    alert("static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9] most frequent element:" +maxElement)
}   
