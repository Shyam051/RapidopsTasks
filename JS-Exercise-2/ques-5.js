// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​ of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.
// Output = union_array : [0,1,2,3,4,5] , a-b_array = [0,1,2], b-a_array = [4,5], intersection_array = [3]
function allinOne(){

    array_a = [0,1,2,3] , array_b = [3,4,5]
    
    let union_array =[]
    alert("Union of [0,1,2,3] and [3,4,5] = "+union_array.concat(array_a,array_b));
    
    function difference(arr1,arr2){
        diff = arr1.filter(ele => !arr2.includes(ele))
        return diff
    }
    
    let a_b_array =difference(array_a,array_b);
    alert("a-b of a = [0,1,2,3] and b = [3,4,5] = "+a_b_array);
    let b_a_array =difference(array_b,array_a);
    alert("b-a of a = [0,1,2,3] and b = [3,4,5] = "+b_a_array);
    
    
    function intersection(arr1,arr2){
        inter = arr1.filter(ele => arr2.includes(ele))
        return inter
    }
    
    let intersection_array = intersection(array_a,array_b);
    alert("Intersection of [0,1,2,3] and [3,4,5] = "+intersection_array);
    
}