document.write("Total marks : 300")
var marks = prompt("Marks obtained");{
if (marks =>  90)
document.write("<br>")
    document.write("Marks obtained : " + marks)
}
document.write("<br>")

var percentage = (marks / 300 * 100)
var round = percentage.toFixed()
    document.write("Percentage : " + round + "%")
console.log(round)
document.write("<br>")

if(round >= 80 ){
    document.write("Grade : A-one")
}
        else if(round >= 70)
        document.write("Grade : A") 
        else if(round >= 60)
        document.write("Grade : B")
        else if(round < 60)
        document.write("Fail")

    document.write("<br>")

if(round >= 80 ){
        document.write("Remarks : Exellent")
        }
                else if(round >= 70)
                document.write("Remarks : Good") 
                else if(round >= 60)
                document.write("Remarks : You need to improve")
                else if(round < 60)
                document.write("Remarks : Sorry")