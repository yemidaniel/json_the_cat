const request = require('request');

var myArgs = process.argv.slice(2);
var breed = myArgs[0];

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url+breed, (error, response, body) => {

  if (error) {
    console.log('error:', error);
    return;
  }

  console.log('statusCode:', response && response.statusCode);
  
  //console.log('body:', body);
  //console.log(`typeof body:`, typeof body);

  const data = JSON.parse(body);
  //console.log(data);
  //console.log('typeof data: ', typeof data);

  if (data.length > 0) {
    console.log("description: ", data[0]["description"]);
  } else {
    console.log(`${breed} not found, please check the name and try again.`)
  }
});
