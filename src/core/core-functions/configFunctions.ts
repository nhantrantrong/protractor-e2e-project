import { JSONUtil } from "../utils/jsonUtils";

export class ConfigFunctions {
    private mainConfigsFilePath = `./src/configs/main.json`;

    public loadConfig(): any {
        const jsonUtils = new JSONUtil();
        return jsonUtils.loadJSONObject(this.mainConfigsFilePath);
    }
}

// Initialize configFunctions class
export const configFunctions = new ConfigFunctions();