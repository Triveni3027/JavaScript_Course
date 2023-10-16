//Object is Javascript
//Object can store any type

//1.....................................
var user = {
  name: "Rahul",
  city: "Delhi",
  id: 101,
  isMarried: true,
  state: "Delhi", //pincode
};
console.log(user);

//2..............................................
// How to new Property in the Existing Object
// <objectName>.<key Name> = <Value>
user.pincode = 500018;
user.email = "Rahul@gmail.com";
console.log(user);


//3...............................................
// How to Update the Value of Exisiting Object
// <objName>.<key Name> = <Updated Value>
user.city = "Mumbai";
user.state = "Other";
console.log(user);


//4...................................................
// How to access Specific Property Value
// <objname>.<key Name>
console.log(user.id, user.city, user.state);


//5..................................................
// delete a specific Property
delete user.pincode;
delete user.state;
delete user.isMarried;
console.log(user);
