/* eslint-disable @typescript-eslint/no-var-requires */
var avatars = require("../lib/getavataaars");
var assert = require("assert");

describe("generateAvatar()", function () {
    console.log("[test suite]", this.title);

    it("null input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(null); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("undefined input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(undefined); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("empty string input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(""); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("accessories supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Accessories: avatars.Accessories.Kurt
        }); 
        assert.strictEqual(actual, "https://avataaars.io/?accessoriesType=Kurt");
    }); 

    it("undefined accessories input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Accessories: undefined
        }); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("null accessories input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Accessories: null
        }); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("valid hair input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Hair: avatars.Hair.Eyepatch
        }); 
        assert.strictEqual(actual, "https://avataaars.io/?topType=Eyepatch");
    }); 

    it("three inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Hair: avatars.Hair.Eyepatch,
            Accessories: avatars.Accessories.Kurt,
            Eyebrow: avatars.Eyebrow.Angry
        }); 
        assert.strictEqual(actual, "https://avataaars.io/?accessoriesType=Kurt&eyebrowType=Angry&topType=Eyepatch");
    }); 

    it("valid hair but other undefined inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Hair: avatars.Hair.Eyepatch,
            Accessories: undefined,
            Eyebrow: undefined
        }); 
        assert.strictEqual(actual, "https://avataaars.io/?topType=Eyepatch");
    }); 

    it("all undefined inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            Hair: undefined,
            AvatarStyle: undefined,
            Accessories: undefined,
            FacialHair: undefined,
            HairColour: undefined,
            Clothes: undefined,
            FabricColour: undefined,
            GraphicOnClothes: undefined,
            Eyebrow: undefined,
            Eyes: undefined,
            Mouth: undefined,
            Skin: undefined
        }); 
        assert.strictEqual(actual, "https://avataaars.io/");
    }); 

    it("invalid parameters supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker", 
            width: 400
        }); 
        assert.strictEqual(actual, "https://avataaars.io/");
    });     
});