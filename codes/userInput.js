food = number(prompt("how much for the food?"))
tip = number(prompt("tip from my side !") / 100)
tip_amount = food * tip
console.log("tip:", tip_amount)
total = food + tip_amount
console.log("total amount:", total)