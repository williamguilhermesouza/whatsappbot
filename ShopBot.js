const { Builder, By, until, Key } = require('selenium-webdriver');

let main = async () => {
    let driver = new Builder().forBrowser('firefox').build();

    await driver.get('http://web.whatsapp.com');
    await driver.wait(until.elementLocated(By.className("_1awRl copyable-text selectable-text")), 60000);
    
    while (true) {
        try {
            let newMessage = await driver.findElement(By.className("VOr2j"));
            newMessage.click();
        } catch {
            setTimeout(() => {}, 60000);
            continue;
        }

        await driver.wait(until.elementLocated(By.className("Srlyw")), 60000);
        let inputBox = await driver.findElement(By.xpath("//*[@data-tab='6']"));
        inputBox.sendKeys('Olá! Agradecemos o contato. Não estamos disponíveis no momento, mas responderemos assim que retornarmos.', Key.ENTER);
    }
}

main();