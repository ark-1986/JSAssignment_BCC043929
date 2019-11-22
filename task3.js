var a = 4;
if (++a === 5) {
alert("given condition for variable a is true"); // condition is true
}
console.log(a)

var b = 82;
if (b++ === 83){
alert("given condition for variable b is false"); //condition is false
}
console.log(b)

var c = 12;
if (c++ === 13){
alert("condition 1 is false"); // condition 1 is false
}
console.log(c)

if (c === 13){
alert("condition 2 is true"); // condition 1 is true
}
console.log(c)

if (++c < 14){
alert("condition 3 is false"); // condition 1 is false
}
console.log(c)

if(c === 14){
alert("condition 4 is true"); // condition 1 is true
}
console.log(c)


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // condition is true
}
console.log("the cost is equal: " + totalCost)


if (true){
    alert("True");
    }
    console.log("The condition is " + true)
    if (false){
    alert("False");
    }
    console.log("The condition is " + false)


if("car" < "cat"){
    alert("car is smaller than cat");
    }
    else{
        alert("cate is smaller than car")
    }
    