const sumAll = function(small,large) {

    if (small <0 || large<0) {return "ERROR"}
    if ((Number.isInteger(small))===false || (Number.isInteger(large))===false ) {return "ERROR"}

    if (small > large) {
        const temp = small;
        small = large;
        large = temp;
      }


    let newArray=[]
    
    for (i=small;i<=large;i++)
    {newArray.push(i)}

    function sum(accumulator,element){return accumulator+element}
    sumOfAllNumbers=newArray.reduce(sum)
    return sumOfAllNumbers
    }



// Do not edit below this line
module.exports = sumAll;
