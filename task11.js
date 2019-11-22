
var time = prompt("Please Enter 24 Hours Clock time")
time = parseInt(time)

if (time >= 0000 && time < 1200){
alert ("Good Morning")
}
else if (time >= 1200 && time < 1700){
    alert ("Good Atfernon")
    }

else if (time >= 1700 && time < 2100){
    alert ("Good Atfernon")
    }

else if (time >= 2100 && time < 2359){
        alert ("Good Night")
        }
else  {
    alert("Enter correct time")
}