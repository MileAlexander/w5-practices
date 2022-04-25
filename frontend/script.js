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