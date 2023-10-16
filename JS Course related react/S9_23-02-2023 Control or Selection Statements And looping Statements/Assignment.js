//#1
//Print the Values from 71 to 91
for ( var i=71 ; i<=91 ; i= i+1 ){
  console.log(i);
}


//WAP to print Employee dtails by using Switch 
var empDetails = [
  {
    id: 101,
    name: "E1",
    designation: "Software Developer",
  },
  {
    id: 102,
    name: "E2",
    designation: "Software Testing Enginner",
  },
  {
    id: 103,
    name: "E3",
    designation: "Team Lead",
  },
  {
    id: 104,
    name: "E4",
    designation: "Software Architect",
  },
];

function displayEmpDetails(id) {
  switch(id){
    case empDetails[0].id:
      console.log(empDetails[0]);
      break;
    case empDetails[1].id:
        console.log(empDetails[1]);
        break;
    case empDetails[2].id:
      console.log(empDetails[2]);
      break;
    case empDetails[3].id:
      console.log(empDetails[3]);
      break;
    default:
      console.log("Out of range");
  }
}
displayEmpDetails(101);
