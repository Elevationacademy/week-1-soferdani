const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
//   const name = prompt('Please enter the name for your reservation');
  
const txt = document.getElementById("theText")
const btn = document.getElementById("btn")
const resalt = document.getElementById("res")
// const addNewItem = function (){
//     const father = document.getElementById("theFather")
//     const pushTheRes = document.createElement('div')

// }

btn.onclick = function () {
    const name = txt.value

    if (reservations[name]) {
        if (reservations[name].claimed){
            resalt.innerHTML="Hmm, someone already claimed this reservation"
        } else {
            resalt.innerHTML="Welcome, Bob"
        }
    } else {
        resalt.innerHTML="You have no reservation"
    }
}


