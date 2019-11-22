
var value1 = prompt("Please Enter 1st Number")
value1 = parseInt(value1)
var ope = prompt("Please operator (+, -, *, /, %)")
var value2 = prompt("Please Enter 2nd Number")
value2 = parseInt(value2)


var sum = value2 + value1
var sub = value1 - value2
var div = value1 / value2
var mul = value1 * value2
var per = (value1 / value2) * 100
var per = per.toFixed()

if (ope == "+"){
alert ("Result : " + sum)
}

    else if (ope == "-"){
    alert ("Result : " + sub)
    }
    else if (ope == "/"){
    alert ("Result : " + div)
    }
    else if (ope == "*"){
        alert ("Result : " + mul)
        }
        else if (ope == "%"){
            alert ("Result : " + per + " %")
            }
else  {
    alert("Enter correct value")
}