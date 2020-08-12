people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  

const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase()
    capitalizedStr += str.slice(1) 
    return capitalizedStr
  }
  
  const getAge = function (age) {
      if (age < 21) {
          return "Underage"
      } else if (age > 55) {
          return "55+"
      } else {
          return `${age} year old`
      }
  }

  const getProffetion = function (profession) {
    let newProffetion = ""
    let words = profession.split(" ")
    for (word in words) {
        newProffetion += capitalize(words[word])
        newProffetion += " "
    }
    return newProffetion
  }

  const getFrom = function (city, country) {
    let from = ""
    city = capitalize(city)
    country = capitalize(country)
    from += `from ${city}, ${country}. `
    return from
  }

  const getCatchphrase = function (txt) {
    txt = capitalize(txt)
    newTxt = ` loves to say "${txt}"`
    return newTxt
  }

  const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} `
    summary += getProffetion(person.profession)
    summary += getFrom(person.city, person.country)
    summary += capitalize(person.name)
    summary += getCatchphrase(person.catchphrase)

    return summary
  }


  for (let i = 0; i<people_info.length; i++) {
    console.log(getSummary(people_info[i]))
  }



  //Guido is an underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!".

