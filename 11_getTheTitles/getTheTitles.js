const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {

    function returnBooks(element){
        return element.title
    }

    returnedTitles=books.map(returnBooks)
    
return returnedTitles


}



// Do not edit below this line
module.exports = getTheTitles;
