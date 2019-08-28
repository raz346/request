var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function(err) {
          throw err;
        })
        .on('response', function (response) {
          console.log('Response Status Code: ', response.statusCode + '\n',  'response message', response.statusMessage + '\n', 'response header type', response.headers['content-type']);
        })
        .pipe(fs.createWriteStream('.\image.jpg'));