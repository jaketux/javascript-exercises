const add = (num1,num2) => num1+num2


const subtract = (num1,num2) =>num1-num2

const sum = function(array){

  if (array.length===0) {return 0}
  function sum(accumulator,element){
    return accumulator + element}
  let reducedArray = array.reduce(sum)
  return reducedArray
}

const multiply = function(array) {

  function sum(accumulator,element){
    return accumulator*element}

    let reducedArray = array.reduce(sum)
    return reducedArray

};

const power = function(number,power) {
  let powerArray=[]

  for (i=0;i<power;i++)
  {powerArray.push(number)
    }

    function sum(accumulator,element){
      return accumulator*element}

let finalArray=powerArray.reduce(sum)

return finalArray

  }
  
const factorial = function(number) {

  if(number===0){return 1}

  let factorialArray=[]

  for (i=number;i>0;i--){
    factorialArray.push(i)
  }

  function sum(accumulator,element){
    return accumulator*element}

let finalArray=factorialArray.reduce(sum)

return finalArray
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
