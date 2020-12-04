const { Builder, By, until } = require('selenium-webdriver');
var promise = require('selenium-webdriver').promise;

let main = async () => {
    let driver = new Builder().forBrowser('firefox').build();

    await driver.get('http://web.whatsapp.com');
    await driver.wait(until.elementLocated(By.className("_1hI5g _1XH7x _1VzZY")), 60000);
    
    function findByHtml() {
        let divList = driver.findElements(By.className("_3Tw1q"));
        let elList = promise.filter(divList, data => {
            return data.className == "_1hI5g _1XH7x _1VzZY"
        });
        let element = promise.filter(elList, data => {
            return data.getAttribute('title') == ""
        });
        console.log(element);
        return element;
    }

    let chat = await driver.findElement();
    console.log(chat);
}

main();
