// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    function checkName(i){
        return i.toUpperCase() == name.toUpperCase()
    }
    return array.filter(checkName) 
    /*return array.filter(function(i){
        if(i == name){
            return i
    }})*/
}

console.log(findMatching(drivers, "Sammy"))


function fuzzyMatch(array,name) {
    function checkFirstLetter(element) {
        return element[0].toUpperCase() == name[0].toUpperCase()
    }
    return array.filter(checkFirstLetter)
}

console.log(fuzzyMatch(drivers, "Sammy"))


const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(array, name){
    return array.filter((element) => element.name === name)
}
console.log(matchName(drivers1, "Bobby"))