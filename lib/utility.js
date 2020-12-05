"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;
class Utility {
    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    resolveSettings(key, setting) {
        if (!setting) {
            return "";
        }
        return `${key}=${setting}&`;
    }
    /**
     * Remove the `&` and `?` characters from the end of the URL if it exists.
     * @param apiURL The API URL being constructed
     */
    trimInvalidCharactersIfExists(apiURL) {
        const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
        const doesURLEndWithQuestion = apiURL.substr(apiURL.length - 1) === "?";
        if (!doesURLEndWithAmpersand && !doesURLEndWithQuestion) {
            return apiURL;
        }
        return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
    }
}
exports.Utility = Utility;
