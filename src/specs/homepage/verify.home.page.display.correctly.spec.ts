import { browser, By } from "protractor";
import { configFunctions } from "../../core/core-functions/configFunctions";
import {logger} from "../../core/core-functions/logger";

// Load test case configurations
const mainConfigs = configFunctions.loadConfig();

describe(`Verify Home Page`, async () => {
    it(`Verify Home Page displays correctly`, async () => {
        logger.step(1, `Navigate to the url`);
        await browser.get(mainConfigs.testSiteUrl);

        logger.verify(`Home page is navigated to successfully`);
        const lblProtractorTutorialXpath = By.xpath(`//h1[text()='Protractor Tutorial']`);
        const lblProtractorTutorial = await browser.findElement(lblProtractorTutorialXpath);
        expect(await lblProtractorTutorial.isDisplayed()).toBe(true);

        logger.step(2, `Click on Shop link`);
        const lblShopXpath = By.xpath(`//a[@class='nav-link'][text()='Shop']`);
        const lblShop = await browser.findElement(lblShopXpath);
        await lblShop.click();

        logger.verify(`Shop page is navigated to successfully`);
        const lblShopNameXpath = By.xpath(`//h1[text()='Shop Name']`);
        const lblShopName = await browser.findElement(lblShopNameXpath);
        expect(await lblShopName.isDisplayed()).toBe(true);

        logger.step(3, `Click on Checkout button`);
        const btnCheckoutXpath = By.xpath(`//a[contains(@class,'btn')][contains(text(),'Checkout')]`);
        const btnCheckout = await browser.findElement(btnCheckoutXpath);
        await btnCheckout.click();

        logger.verify(`Checkout page is navigated to successfully`);
        const lblTotalXpath = By.xpath(`//h3[text()='Total']`);
        const lblTotal = await browser.findElement(lblTotalXpath);
        expect(await lblTotal.isDisplayed()).toBe(true);
    });
});