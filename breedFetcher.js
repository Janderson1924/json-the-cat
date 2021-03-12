const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (breedName) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      if (error) {
        console.log(`Bueller? Bueller?`, error);
      } else {
        const newData = JSON.parse(body);
        const breed = newData[0];
        if (breed) {
          callback(null, breed.description);
        } else {
          callback('breed not found', null);
        }
        // console.log(newData[0].description);
      }
    });
  }
};

module.exports = { fetchBreedDescription };




