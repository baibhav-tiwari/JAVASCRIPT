// Arrays 
const groceries = ['banana', 'apple', 'pear', 'orange']
console.log(groceries)
console.log(groceries[0])

// Array methods

// push- adds one or more elements to the end of the array and returns the new length of the array
groceries.push('watermelon')
console.log(groceries)
groceries.push('guava', 'papaya', 'grapes')

// slice-
console.log(groceries.slice(0, 2))

//indexof - to find the index of a particular element present in the array
console.log(groceries.indexOf('pear'))