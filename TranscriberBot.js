const { Builder, By, until, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

let main = async () => {
    let options = new firefox.Options();
    options.setPreference("browser.download.folderList", 2);
    options.setPreference("browser.download.dir", "d:\\");
    options.setPreference("browser.helperApps.neverAsk.saveToDisk", "audio/ogg");
    options.setPreference("browser.helperApps.alwaysAsk.force", false);
    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    const actions = driver.actions({async: true});
    const mouse = actions.mouse();

    await driver.get('http://web.whatsapp.com');
    await driver.wait(until.elementLocated(By.className("_1awRl copyable-text selectable-text")), 60000);

    // getting stale element error
    let chatHeader = await driver.findElement(By.xpath("//*[@title='Luccas']")); 
    chatHeader.click(); 


    await driver.wait(until.elementLocated(By.className("_2mDlG")), 60000);
    let audioBox = await (await driver).findElement(By.className('_2mDlG'));

    actions.move({origin: audioBox}).click();
    actions.perform();

    await driver.wait(until.elementLocated(By.className("_1qGcR")), 60000);
    let downArrow = await (await driver).findElement(By.className('_1qGcR'));
    downArrow.click();   

    await driver.wait(until.elementLocated(By.className("_1OwwW _3oTCZ _1NUp7")), 60000);
    let downloadButton = await (await driver).findElements(By.className('_1OwwW _3oTCZ _1NUp7'));
    downloadButton = downloadButton[2];
    downloadButton.click();

}

main();