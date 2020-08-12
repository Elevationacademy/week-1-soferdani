const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const countWords = function (sentence) {

}


const cleanText = function (arry) {
    for (i in specialChars){
        arry.replace(specialChars[i])
    }
    console.log(arry)
}

let newStory = cleanText(story)