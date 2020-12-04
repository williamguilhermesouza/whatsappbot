const { Builder } = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();
let condition = new Promise( (resolve, reject) => {
    if (resolve) {
        setTimeout(resolve(true), 15000);
    } else {
        reject(false);
    }
});

setTimeout(() => {condition = true}, 15000);
driver.get('http://web.whatsapp.com');
driver.wait(condition, 30);
