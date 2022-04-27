const firstPerson = {
    name: "Peter",
    gender: "male"
}
const secondPerson = {
    name: "Sara",
    gender: "female"
}

function detectGender(person) {
    if (person.gender === "female") {
        return "This person is a female"
    } else {
        return "This person is a male"
    }
}

console.log( detectGender(firstPerson) );
console.log( detectGender(secondPerson) );




function warnTheSheep(queue) {
    let rqueue = queue.reverse()
    for (let i = 0; i < rqueue.length; i++) {
        if (rqueue.slice(i) === "sheep") {
        continue
        } else {
            let n = i-1
        }
    }
    if(queue.slice(-1) === "wolf") {
      return "Pls go away and stop eating my sheep"
    }else {
      return "Oi! Sheep number "+queue.length+"! You are about to be eaten by a wolf!"
    }
}