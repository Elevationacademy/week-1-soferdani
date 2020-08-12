// const greet = function (name) {
    
//     console.log("hello  " + name)
// }

// console.log(Date.now)


// const names = ["thiamamaa","massadasd","tjsisisisad"]

// for (let n of names){
//     greet(n)
// }

// const tellAJoke = function () {
//     console.log('this is masho funny')
// }


// const createUesr = function (name, age) {
//     const user = {name: name, age:age}
//     console.log(user)
// }

// createUesr ("dani",27)

// const add = function(x, y){
//     const sum = x + y
//     console.log("Returned " + sum)
//     return sum
//   }
  
//   add(1, 2)

// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log(`i like ${food} very much`)
//     }
//   }
  
//   person.speak('cheese tost')

//exe1

// const calcAge = function (currntYear, yearOfBirth) {
//     const age = currntYear - yearOfBirth 
//     return age
// }

// const age = calcAge (2019 , 1989)
// console.log (age)

//exe2 
 
// const calcAge2 = function (currntYear, yearOfBirth) {
//     const age = currntYear - yearOfBirth 
//     console.log (`You are either ${age} or ${age -1}`)
// }

// const age = calcAge2 (2020, 2015)

//exe3 

// const isEven = function (num) {
//     if (num%2==0) {
//         return true
//     } else return false
// }

// console.log(isEven(6))

//exe4 

// const isEven1 = function (nums) {
//     for (num of nums) {
//         if (num%2==0){
//             console.log(num)
//         }
//     }
// }

// const nums = [2,3,4,5,6,7,7,3,12,33,23,21,]
// isEven1(nums)

//exe5 
// const isTheNumThere = function (arry,num) {
//     for (i in arry) {
//         if (arry[i]===num){
//             return true
//         } 
//     }
//     return false
// }

// let arryy = [2,35,6,7,3,4,36,88,55,33,4,2234]
// let num = 32

// console.log (isTheNumThere (arryy,num))

//exe6 

// const calculator = {
//     add: function (num1,num2) {
//         return num1+num2
//     },
//     subtract: function (num1,num2) {
//         return num1-num2
//     }
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2))


//exe 7
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// const increaseByNameLength = function (mony, name){
//     return ((name.length)*mony)
// }

// const makeRegal = function (name) {
//     return `His Royal Highness, ${name}`
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//splice challenge 

const splice = function(arry, startPoint, endPoint, pushInside = null){
    let i = 0
    if (i<startPoint) {
        i++
    } else {
        arry
        }
    }
    

let arrrrr = [2,31,2,41,2,31,23,555,3,1,90]
for (i in arrrrr){
    console.log(i)
}