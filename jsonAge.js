// age>=50 how many ?
const { Console } = require('console');
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {

    let body = "";

    resp.on("data", (chunk) => {
        body += chunk;
    });

    resp.on("end", () => {
        let json = JSON.parse(body);
        let myArray = json.data.split(", ")
        let counter = 0
        for (let item in myArray) {

            if (myArray[item].charAt(0) == 'a') {
                let age = []
                age += myArray[item].match(/\d+/g)
                if (age >= 50) {
                    counter++
                }

            }

        }
        console.log(counter);
    });
});