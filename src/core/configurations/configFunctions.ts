import { JSONUtil } from "../utils/jsonUtils";

export class ConfigFunctions {
    private mainConfigsFilePath = "src/configs/mains.json";

    public loadConfig(): any {
        const jsonUtils = new JSONUtil();
        return jsonUtils.loadJSONObject(this.mainConfigsFilePath);
    }
}