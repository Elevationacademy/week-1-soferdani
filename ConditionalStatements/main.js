
//exe1
// let numChildren = prompt("what is your username ??")

// let isCareful = false
// if (!isCareful) {
//     numChildren--
// }

// console.log(numChildren)

//exe2

// silverwareCount = 2
// if (!(silverwareCount%2==0)) {
//     console.log("somthing is missing here")
// } else {
//     console.log("nothing is missinig")
// }

//exe3

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// console.log(salary)

// if (performance === "stellar") {
//     salary += stellarBonus
// } else if ( performance === "good") {
//     salary += goodBonus
// }

// console.log(salary)

//exe4

// const isVIP = false
// let cash = 299

// if ((isVIP)||(cash>300)){
//     console.log("hello to you deer whatever you got in!")
// } else {
//     console.log("stoppppp you to ugley to go inside")
// }

//exe5 

//exe6

// let gender = null
// let profession = "business"

// if (gender = 'male') {
//     profession = 'businessman'
// } else if (gender = 'female') {
//     profession = 'businesswoman'
// } else if (!gender) {
//     profession = 'businessperson'
// }
// console.log(profession)

//exe7 
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if (boughtTesla && isUSCitizen) {
    if (currentYear-yearOfTeslaPurchase>4){
        console.log ("would like an upgrade??")
    } else {
        console.log("are you satisfied with the car??")
    }
} else if (boughtTesla) {
    console.log ("would you like to move to the US??")
} else {
    console.log("would you like to buy a tesla car??")
}