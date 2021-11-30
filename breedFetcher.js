const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=siberian";

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  
  //console.log('body:', body);
  //console.log(`typeof body:`, typeof body);

  const data = JSON.parse(body);
  //console.log(data);
  //console.log('typeof data: ', typeof data);

  console.log("description: ", data[0]["description"]);
});
