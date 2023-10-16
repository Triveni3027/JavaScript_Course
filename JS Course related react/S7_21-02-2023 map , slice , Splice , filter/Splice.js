var arr = [10, 30, 55, 79, 78, 21, 33];
console.log(arr);
console.log("--------------------------------------");
// arr.splice(3, 3, "Kabir", 9999999999);
arr.splice(1, 0);
console.log(arr);



// Assignment
// Add new Element ("Ashok IT") in btw 79 and 78
arr.splice(4,0,"Ashok IT")
console.log(arr);
//output
//[ 10, 30, 55, 79, 'Ashok IT', 78, 21, 33 ]
