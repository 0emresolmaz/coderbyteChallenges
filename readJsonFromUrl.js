const { Console } = require('console');
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

    let body = "";

    resp.on("data", (chunk) => {
        body += chunk;
    });

    resp.on("end", () => {
        let json = JSON.parse(body);

        console.log(json);

    });
});