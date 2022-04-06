var myPet = {
  species: "Wild",
  name: "Moodie",
  legs: 2,
  friends: ["Raphael", "Garibaldi"]
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };