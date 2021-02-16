const { Builder, By, until, Key } = require('selenium-webdriver');

let main = async () => {
    let driver = new Builder().forBrowser('firefox').build();

    await driver.get('http://web.whatsapp.com');
    await driver.wait(until.elementLocated(By.className("_1awRl copyable-text selectable-text")), 60000);
    
    let chatHeader = await driver.findElement(By.xpath("//*[@title='chatospammer']"));
    chatHeader.click();

    await driver.wait(until.elementLocated(By.className("Srlyw")), 60000);
    let inputBox = await driver.findElement(By.xpath("//*[@data-tab='6']"));
    for (let i = 0; i < 100; i++) {
        try {
            inputBox.sendKeys('Spammar é legal', Key.ENTER);
        } catch {
            let inputBox = await driver.findElement(By.xpath("//*[@data-tab='6']"));
            inputBox.sendKeys('Spammar é legal', Key.ENTER);

        }
    }
}

main();
