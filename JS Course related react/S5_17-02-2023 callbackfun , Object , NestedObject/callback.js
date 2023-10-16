
//1

function funName(x){
  var city = "Delhi"
  x();
  console.log(city);
  x();
  console.log("Main Function");
  x();
}
funName("Asfdsp") //normal function call by giving one argument
 

//2 .Now Example of callback function without Ruguments

function funName(x){
  var city = "Delhi"
  x();
  console.log(city);
  x();
  console.log("Main Function");
  x();
}   //function is an orgument 
funName(function (){
  console.log("I am call back Function");
});

//Output
// I am call back Function
// Delhi
// Main Function
// I am call back Function


//3 . In call back funtion with aruguments
function fn(f) {
  f(10, 10);
  var city = "Delhi";
  console.log(city);
  f(5, 5);
  console.log("Main Function");
  f(2, 3);
}
function fnAdd(x, y) 
   {
      console.log(x + y);
    }
//the writing above funtion then call there do not any output
fn(fnAdd); //here output is coming

//output
// 20
// Delhi
// 10
// Main Function
// 5


