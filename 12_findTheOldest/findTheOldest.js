const findTheOldest = function(people) {


    const newDate = new Date().getFullYear() 
    
    function yearOfBirth(element){
        return element.yearOfBirth
    }

    let yearsOfBirth = people.map(yearOfBirth)

    function yearOfDeath(element){
        if (element.yearOfDeath===undefined){return newDate} else {
        return element.yearOfDeath}
    }

    let yearsOfDeath = people.map(yearOfDeath)
    
    let agesOfDeath=[];
    for (i=0;i<yearsOfDeath.length;i++)
    {
        agesOfDeath.push(yearsOfDeath[i]-yearsOfBirth[i])
    }


    let oldestAgeIndex=0;
        
    for(let j=0;j<=agesOfDeath.length;j++){
            if (agesOfDeath[j]>agesOfDeath[oldestAgeIndex]){
                oldestAgeIndex=j;
            }
        }
        return people[oldestAgeIndex]
    };


// Do not edit below this line
module.exports = findTheOldest;
