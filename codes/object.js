// Objects - objects are type of variables, quite similar to arrays but they have something called key value pairs

// there are twi ways in which properties of object can be accessed
// 1- dot notation for example- console.log(person.shirt)
// 2- bracket notation for example - console.log(person['shirt])

// method - a method is a property conataining a function definition

const person = {
    name: 'leonardo', //properties
    shirt: 'white'
}
console.log(person.name, person.shirt) // dot notation
console.log(person['name']) // bracket notation

//assign
person.phone = '2134643843'
person['adddress'] = 'noida'// assigning can also be done usinhg bracket notation
console.log(person.phone)
console.log(person)

//arrow function
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }
    const intro = `hi my ${person.name} and the color of my shirt is ${person.shirt}`
    return intro
}
console.log(introducer('baibhav', 'orange'))

// functions using method
const introduce = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assests: 60000,
        liabilities: 4000,
        networth: function () {
            return this.assests - this.liabilities
        }
    }
    const intro = ` Heyy, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is ${person.networth()}`
    return intro
}
console.log(introduce('baibhav', 'orange'))