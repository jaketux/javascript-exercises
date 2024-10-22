

const repeatString = function(string, number){
    if (number<0){
        return "ERROR"
    } else if (number===0){
        return ""} 
    else {let newString="";
        for (i = 0;i<number;i++){
        newString+=string;}
    return newString
}}
   




// Do not edit below this line
module.exports = repeatString;
