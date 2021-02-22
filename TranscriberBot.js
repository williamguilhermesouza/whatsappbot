const { Builder, By, until, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const speech = require('@google-cloud/speech');
const fs = require('fs');

async function speech_to_text() {

    // Creates a client
    const client = new speech.SpeechClient();

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: fs.readFileSync('./input.ogg').toString('base64'),
    };

    const config = {
        encoding: 'OGG_OPUS',
        sampleRateHertz: 48000,
        languageCode: 'pt-BR',
    };
    const request = {
        audio: audio,
        config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);

    return transcription;
}


let main = async () => {
    let options = new firefox.Options();
    options.setPreference("browser.download.folderList", 2);
    options.setPreference("browser.download.dir", "d:\\");
    options.setPreference("browser.helperApps.neverAsk.saveToDisk", "audio/ogg");
    options.setPreference("browser.helperApps.alwaysAsk.force", false);
    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    const actions = driver.actions({async: true});

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
