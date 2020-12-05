"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAvatar = exports.Skin = exports.Mouth = exports.Eyes = exports.Eyebrow = exports.GraphicOnClothes = exports.FabricColour = exports.Clothes = exports.HairColour = exports.FacialHair = exports.Accessories = exports.AvatarStyle = exports.Hair = void 0;
const utility_1 = require("./utility");
const baseURL = "https://avataaars.io/";
const util = new utility_1.Utility();
var models_1 = require("./models");
Object.defineProperty(exports, "Hair", { enumerable: true, get: function () { return models_1.Hair; } });
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return models_1.AvatarStyle; } });
Object.defineProperty(exports, "Accessories", { enumerable: true, get: function () { return models_1.Accessories; } });
Object.defineProperty(exports, "FacialHair", { enumerable: true, get: function () { return models_1.FacialHair; } });
Object.defineProperty(exports, "HairColour", { enumerable: true, get: function () { return models_1.HairColour; } });
Object.defineProperty(exports, "Clothes", { enumerable: true, get: function () { return models_1.Clothes; } });
Object.defineProperty(exports, "FabricColour", { enumerable: true, get: function () { return models_1.FabricColour; } });
Object.defineProperty(exports, "GraphicOnClothes", { enumerable: true, get: function () { return models_1.GraphicOnClothes; } });
Object.defineProperty(exports, "Eyebrow", { enumerable: true, get: function () { return models_1.Eyebrow; } });
Object.defineProperty(exports, "Eyes", { enumerable: true, get: function () { return models_1.Eyes; } });
Object.defineProperty(exports, "Mouth", { enumerable: true, get: function () { return models_1.Mouth; } });
Object.defineProperty(exports, "Skin", { enumerable: true, get: function () { return models_1.Skin; } });
/**
 * Generates a avataaar image URL that you can supply to your `<img/>` tag.
 * @param settings {GetAvataaarsSettings} A settings object with any custom values.
 * @example Returns a URL for your image like: https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFro&accessoriesType=Prescription01&facialHairType=BeardLight
 */
function generateAvatar(settings) {
    let apiURL = baseURL;
    if (!settings) {
        return apiURL;
    }
    apiURL += "?";
    apiURL += util.resolveSettings("accessoriesType", settings.Accessories);
    apiURL += util.resolveSettings("avatarStyle", settings.AvatarStyle);
    apiURL += util.resolveSettings("clotheType", settings.Clothes);
    apiURL += util.resolveSettings("eyebrowType", settings.Eyebrow);
    apiURL += util.resolveSettings("eyeType", settings.Eyes);
    apiURL += util.resolveSettings("clotheColor", settings.FabricColour);
    apiURL += util.resolveSettings("facialHairType", settings.FacialHair);
    apiURL += util.resolveSettings("graphicType", settings.GraphicOnClothes);
    apiURL += util.resolveSettings("topType", settings.Hair);
    apiURL += util.resolveSettings("facialHairColor", settings.HairColour);
    apiURL += util.resolveSettings("mouthType", settings.Mouth);
    apiURL += util.resolveSettings("skinColor", settings.Skin);
    apiURL = util.trimInvalidCharactersIfExists(apiURL);
    return apiURL;
}
exports.generateAvatar = generateAvatar;
