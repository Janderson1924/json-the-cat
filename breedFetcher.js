const request = require('request');
let newBreed = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  if (error) {
    console.log(`Bueller? Bueller?`, error);
  }
  if (newBreed[0]) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${newBreed[0]}`, (error, response, body) => {
      if (error) {
        console.log(`Bueller? Bueller?`, error);
      } else {
        const newData = JSON.parse(body);
        console.log(newData[0].description);
      }
    });
  }
});



