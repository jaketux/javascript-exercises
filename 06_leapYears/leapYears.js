const leapYears = function(yearToCheck) {
    
    if (yearToCheck%100===0 && yearToCheck%400!==0) {return false}
    else if (yearToCheck%100===0 && yearToCheck%400===0) {return true}
    else if (yearToCheck%4===0){return true}
    else if (yearToCheck%4===0 && yearToCheck%400===0){return true}
    else if (yearToCheck%4===1){return false}
    
};

// Do not edit below this line
module.exports = leapYears;
