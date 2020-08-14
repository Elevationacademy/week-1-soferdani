//create the other boxes

const fatherDiv = document.getElementById("conteiner")

const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    const reandomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[reandomPosition]
}

for ( let x = 0 ; x< 6 ; x++){
    let box = document.createElement("div")
    box.setAttribute("class","box")
    box.setAttribute("id",`boxNum${x}`)
    fatherDiv.appendChild(box)
    box.onmouseenter = function (){
        let color = getRandomColor()
        box.style.backgroundColor = color
    }

}





