/* eslint-disable @typescript-eslint/no-var-requires */
var utility = require("./../lib/utility");
var assert = require("assert");

describe("trimInvalidCharactersIfExists()", function () {
    console.log("[test suite]", this.title);
    const util = new utility.Utility();

    it("URL with single invalid character supplied at the end", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = util.trimInvalidCharactersIfExists("https://avataaars.io/?"); 
        assert.strictEqual(actual, "https://avataaars.io/");
    });
    
    it("URL with multiple invalid characters at the end supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = util.trimInvalidCharactersIfExists("https://avataaars.io/??"); 
        assert.strictEqual(actual, "https://avataaars.io/?");
        actual = util.trimInvalidCharactersIfExists("https://avataaars.io/?&"); 
        assert.strictEqual(actual, "https://avataaars.io/?");
    }); 
});