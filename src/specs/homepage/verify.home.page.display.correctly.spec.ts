import { browser, By } from "protractor";
import { ConfigFunctions } from "src/core/configurations/configFunctions";

// Init necessary class
const confFunctions = new ConfigFunctions();

// Load test case configurations
const mainConfigs = confFunctions.loadConfig();
// const url = `https://rahulshettyacademy.com/angularpractice`;

describe(`Verify Home Page`, async () => {
    it(`Verify Home Page displays correctly`, async () => {
        console.log(`[Step 1] Navigate to the url`);
        await browser.get(mainConfigs.url);
        // await browser.get(url);

        console.log(`[Verify] Home page is navigated to successfully`);
        const lblProtractorTutorialXpath = By.xpath(`//h1[text()='Protractor Tutorial']`);
        const lblProtractorTutorial = await browser.findElement(lblProtractorTutorialXpath);
        expect(await lblProtractorTutorial.isDisplayed()).toBe(true);

        console.log(`[Step 2] Click on Shop link`);
        const lblShopXpath = By.xpath(`//a[@class='nav-link'][text()='Shop']`);
        const lblShop = await browser.findElement(lblShopXpath);
        await lblShop.click();

        console.log(`[Verify] Shop page is navigated to successfully`);
        const lblShopNameXpath = By.xpath(`//h1[text()='Shop Name']`);
        const lblShopName = await browser.findElement(lblShopNameXpath);
        expect(await lblShopName.isDisplayed()).toBe(true);

        console.log(`[Step 3] Click on Checkout button`);
        const btnCheckoutXpath = By.xpath(`//a[contains(@class,'btn')][contains(text(),'Checkout')]`);
        const btnCheckout = await browser.findElement(btnCheckoutXpath);
        await btnCheckout.click();

        console.log(`[Verify] Checkout page is navigated to successfully`);
        const lblTotalXpath = By.xpath(`//h3[text()='Total']`);
        const lblTotal = await browser.findElement(lblTotalXpath);
        expect(await lblTotal.isDisplayed()).toBe(true);
    });
});