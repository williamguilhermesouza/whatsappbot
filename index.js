const { Builder, Session, By, Condition } = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();

let condition = new Condition('for auth').getCookies;

driver.get('http://web.whatsapp.com');
driver.wait(condition, 9000000);

async function nameElement() {
    let namesList = await driver.findElements(By.className("_1hI5g _1XH7x _1VzZY"));
    let name = namesList.filter( name => {
        if (name.title == "Luccas") {
            return name;
        }
    });
    console.log(namesList);
    return name;
}

