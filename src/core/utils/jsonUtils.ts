// import the fs module
const fs = require('fs');

export class JSONUtil {
    public loadJSONObject(path: string) {
        // read the file into raw data
        let rawdata = fs.readFileSync(path);
        // return the loaded JSON format from JSON data
        return JSON.parse(rawdata);
    }
}