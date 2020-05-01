import { browser } from "protractor";
import { ConfigFunctions } from "src/core/configurations/configFunctions";

// Init necessary class
const confFunctions = new ConfigFunctions();

// Load test case configurations
const mainConfigs = confFunctions.loadConfig();

describe("A Feature", async () => {
    it("contains scenario with an expectation", async () => {
        await browser.get(mainConfigs.url);
    });
});