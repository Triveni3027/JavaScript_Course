
var obj1 = {
    c :100
}

var obj2 = {
    c :300
}
var obj3 = {
    c :500
}

function add(x,y,z){
    console.log(x+y+z+this.c)
}

//Technique1(function)
var fn = add.bind(obj2)
fn(10,10,10)

//Technique2
var fn = add.bind(obj2,10,10,20)
fn()

//Technique3 (Retuen)
add.bind(obj2,10,10,10)()

//Technique4
add.bind(obj2)(10,10,10)