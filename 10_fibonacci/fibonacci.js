const fibonacci = function(number) {
    if (number==0) {return 0}
    if (number<0) {return "OOPS"}
    if (typeof number !== "number"){number=parseInt(number)}
    else {number = number}
    
    const startOfFib=[1,1]

    for (var i=2;i<number;i++)
    {   
        startOfFib.push(startOfFib[i-2]+startOfFib[i-1])
    }
    return startOfFib[number-1]

};

// Do not edit below this line
module.exports = fibonacci;
