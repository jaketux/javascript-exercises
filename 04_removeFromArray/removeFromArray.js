const removeFromArray = function(array,...args) { 
    let newArray=[]
    
    for (i=0;i<args.length;i++)
    { ;
        newArray.push(args[i])
    }

differentArray=array.filter(function(element){
    return newArray.indexOf(element)===-1})

    return differentArray
} 



// Do not edit below this line
module.exports = removeFromArray;
