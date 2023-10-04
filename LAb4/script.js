let userName = "Andrew"
let userAge = 21
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
var everyDaySpendingPerPet = 6
let daysSurvived = 0;
var userPets =["Cat","Dog","Hamster"]


//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("balance: ", userBalance )
console.log("everyDaySpend: ", everyDaySpendingPerPet)
console.log("daysSurvived: ", daysSurvived)


while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

function nameVertical(name) {
for(let i =0;i<name.length;i++){
    console.log(name.charAt(i))
}
}
// Sarah for example
nameVertical("Sarah")
console.log("User have sufficient money for " + daysSurvived + " days")

function code(n){
    return (n<100)? "Not valid code" :
    (n>=100 && n< 199) ? "Informational response": 
    (n>=200 && n< 299) ? "Successful response" :
    (n>=300 && n< 399) ? "Redirection message":
    (n>=400 && n< 499) ? " CLient error response": 
    (n>=500 && n< 599)? "Server error response" : "Not a valid code"
   
}

function compareVariables(var1, var2) {
    console.log(var1)
    console.log(var2)
    return (typeof var1 != typeof var2) ? "cant compare" :
    (var1< var2) ? "var2 is bigger":
    (var1>var2) ? "var1 is bigger":
    (var1 == var2 && typeof var1 == typeof var2) ? "Equal and sametype" :"somethign else"


}

// After completing the function pass different values instead of var1 and var2 to test your function

console.log(compareVariables ("asd", "asd"));

function fib(n){
    let a=0
    let b=1
    let number=0;
    console.log(a)
    console.log(b)
    for(let i = 2;i<=n;i++){
        number = a+b;
        console.log(number)
        a=b
        b=number 

    }

}
fib(3)



