const request = require('request');

const myArgs = process.argv.slice(2);
const breed = myArgs[0];

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url + breed, (error, response, body) => {

  if (error) {
    console.log('error:', error);
    return;
  }

  //console.log('statusCode:', response && response.statusCode);
  
  const data = JSON.parse(body);

  if (data.length > 0) {
    console.log("description: ", data[0]["description"]);
  } else {
    console.log(`${breed} not found, please check the name and try again.`);
  }
});
