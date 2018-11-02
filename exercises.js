var bango1 = 45
var bango2 = 9

function add(num1, num2) {
return num1 + num2
}
var sum = add(bango1,bango2);
console.log(sum);

function subtract(num1, num2) {
return num1 - num2
}
var difference = subtract(bango1,bango2);
console.log(difference);

function multiply(num1, num2) {
return num1 * num2
}
var product = multiply(bango1,bango2);
console.log(product);

function divide(num1, num2) {
return num1 / num2
}
var quotient = divide(bango1,bango2);
console.log(quotient);

function checkSum(x) {
return "Mariah Carey has been married " + x + " amount of times."
}
console.log(checkSum(sum));

function checkDifference(x) {
return "Last night I dreamt that I ate " + x + " Taco Bell soft tacos."
}
console.log(checkDifference(difference));

function checkProduct() {
return sum * product
}
console.log(checkProduct(product));

function checkQuotient() {
return product * quotient
}

var bango3 = 8
var bango4 = 6
var bango5 = 3
function addThenSubtract(num1,num2,num3) {
    return (num3 - (num1 + num2))
}
addThenSubtract(bango3,bango4,bango5)
console.log(addThenSubtract(bango3,bango4,bango5))

function createFullName(firstName,lastName) {
  return firstName + " " + lastName
}
var myFullName = createFullName("Harvey Lloyd","Picar")
console.log(myFullName)

function eatFood(firstName,lastName,food) {
  return firstName + " " + lastName + " " + "eats " + food + " everyday for breakfast."
}
var createEatFood = eatFood("Harvey Lloyd","Picar","Palabok")
console.log(createEatFood)

function shoeSize(inches) {
  return inches * 2.54
}
console.log(shoeSize(8))

function allCaps(str) {
  return str.toUpperCase(str)
}
console.log(allCaps("believe in youself"))

function oneCap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(oneCap("exquisite"))

function verifyDrinkingAge(age) {
  return Boolean(age > 21)
}
verifyDrinkingAge(34)
var canDrink = verifyDrinkingAge(34)
console.log(canDrink)

function throwParty(canDrink) {
  if (canDrink) {
    return "Cheee Hoo! We going to da party!"
  }
  else {
    return "Meh, see you at Starbucks."
  }
}
var canParty = throwParty(canDrink)
console.log(canParty)