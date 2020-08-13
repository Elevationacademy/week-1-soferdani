
const box = document.getElementById("box")
//console.log(box)
box.onclick = function () {
    box.innerHTML = "clicked"
}

box.onmouseenter = function () {
    box.style.color = "red"
}



// console.log(listItems)
const addNewItem = function () {
    
    const listItems = document.getElementById("theUl")
    const itemlist = document.createElement("li")
    itemlist.innerHTML = "A new item"
    //console.log("this is a chack ")
    listItems.appendChild(itemlist)
}



const boxa = document.createElement("div") // dynamically creating an element
//console.log(boxa)
boxa.setAttribute("id", "boxa")
boxa.onclick = function(){       // adding an event to the new element
    boxa.innerHTML = "I'm alive!"
}
// const nawwwEl = document.createElement("div")
// nawwwEl = nawwwEl.setAttribute("id", "some-id")

//why is this not working??
// const a = document.createElement("div")//.setAttribute("id", "some-id")
//console.log(nawwwEl)
document.getElementById("some-id").appendChild(boxa) // now the box will be on the page, and will react to a click!



//debug explenetion with yoni
// const b = function() {
//     console.log('hi')
// }
// const a = function() {
// b()
// }



// a()