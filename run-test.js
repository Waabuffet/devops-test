const fetch = require('node-fetch');
// var fs = require('fs');
var env = require('./env/env');
var respOKstring = 'Hello World';

var url = env.method + '://' + env.host + ':' + env.port + env.api;

// fetch is faster than http
fetch(url, { method: "Get" })
    .then(res => res.json())
    .then((json) => {
        testResponse(json.response);
});

function testResponse(resp){
    if(resp == respOKstring){
        console.log('OK');
        //fs.writeFile(filename, data, [encoding], [callback])
    }else{
        console.log('ERROR');
    }
}