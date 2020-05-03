import { browser } from "protractor";
import { configFunctions } from "src/core/core-functions/configFunctions";

// Load test case configurations
const mainConfigs = configFunctions.loadConfig();

describe("A Feature", async () => {
    it("contains scenario with an expectation", async () => {
        await browser.get(mainConfigs.url);
    });
});