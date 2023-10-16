var data = [20, 13, 22, 25, 67, 98, 100, 77, 75];

// if element is even then add 100

//if element is odd then add 500

// 120 513 220 525 ----------

// selection statement called    if and else
console.log("Before--------------------------------------------");
console.log(data);
console.log("After---------------------------------------------");
data.forEach(function (element, index) {
    if (element%2 == 0){
           console.log(element + 100);
    }
    else {
            console.log(element + 500);
        }
    });
//console.log(data);
