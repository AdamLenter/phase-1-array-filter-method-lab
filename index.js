// Code your solution here
const drivers = ["John", "Fred", "Tom", "John"];

function findMatching(listOfDrivers, nameToMatch) {
    const filteredList = listOfDrivers.filter(function (driver) {
        return driver.toUpperCase() == nameToMatch.toUpperCase();
      });
      return filteredList;
}

function fuzzyMatch(listOfDrivers, nameToMatch)
    {
    const nameLength = nameToMatch.length;
    const filteredList = listOfDrivers.filter(function (driver) {
        return driver.toUpperCase().substring(0, nameLength) == nameToMatch.toUpperCase().substring(0, nameLength);
        });
    return filteredList; 
    }