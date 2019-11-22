
var numinput = prompt("Guess the secret number")
numinput = parseInt(numinput);

if (numinput == 1 || numinput == 2 || numinput == 3 || numinput == 4
     || numinput == 5 || numinput == 6 || numinput == 7 || numinput == 8 || numinput == 9 || numinput == 10)
    alert("Bingo! Correct answer")

else if (numinput <= 11)
    alert("Close enough to the correct answer")

else {
    alert("Try again")
}