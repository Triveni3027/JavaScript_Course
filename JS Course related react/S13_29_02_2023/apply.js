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

add.apply(obj1,[10,10,10]) //130
add.apply(obj2,[10,10,10]) //330
add.apply(obj3,[10,10,10]) //530y

// var fn = add.bind(obj2)
// fn(10,10,10)

var fn = add.bind(obj2,10,10,20)
fn()


add.bind(obj2,10,10,10)()

add.bind(obj2)(10,10,10)