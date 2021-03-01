const { Builder, By, until, Key } = require('selenium-webdriver');

let main = async () => {
    let driver = new Builder().forBrowser('firefox').build();
    const actions = driver.actions({async: true});

    await driver.get('http://web.whatsapp.com');
    await driver.wait(until.elementLocated(By.xpath("//*[@title='TesteDoZapBot']")), 60000);
    console.log("Zap logged in!");
    
    let chatHeader = await driver.findElement(By.xpath("//*[@title='TesteDoZapBot']")); // put the contact name
    chatHeader.click();
    console.log("Found group!");


    await driver.wait(until.elementLocated(By.className("_1-qgF")), 60000);
    let groupHeader = await driver.findElement(By.className("_1-qgF"));
    groupHeader.click();
    console.log("Clicked group header!");

    await driver.wait(until.elementLocated(By.className("_3ZEdX _3hiFt _82zXh")), 60000);
    let groupDescription = await (await driver).findElement(By.className('_3ZEdX _3hiFt _82zXh'));
    groupDescription.click();
    console.log("Clicked group description!");

    await driver.wait(until.elementLocated(By.xpath("//*[@title='Luccas']")), 60000);
    let memberToKick = await (await driver).findElement(By.xpath("//*[@title='Luccas']"));

    driver.executeScript("arguments[0].scrollIntoView();", memberToKick);
    console.log("Scrolled group down!");

    actions.move({origin: memberToKick}).click();
    actions.perform();
    console.log("Mouse on member to kick!");

    await driver.wait(until.elementLocated(By.className("dNJHX")), 60000);
    let downArrow = await (await driver).findElement(By.className('dNJHX'));
    downArrow.click(); 
    console.log("Found kicking arrow!");

    await driver.wait(until.elementLocated(By.className("_11srW _2xxet")), 60000);
    let kickButton = await (await driver).findElements(By.className('_11srW _2xxet'));
    kickButton = kickButton[1];
    kickButton.click();
    console.log("Clicked member to kick!");

    await driver.wait(until.elementLocated(By.className("_1dwBj _3xWLK")), 60000);
    let confirmation = await (await driver).findElement(By.className('_1dwBj _3xWLK'));
    confirmation.click();
    console.log("Confirmed, member kicked!");
    
    
}

main();