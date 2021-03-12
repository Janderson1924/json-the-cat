const catFunction = require('./breedFetcher.js');
const fetchBreedDescription = catFunction.fetchBreedDescription;
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});