import { GetAvataaarsSettings } from "./models";
import { Utility } from "./utility";

const baseURL = "https://avataaars.io/"; 
const util = new Utility();

export { 
    Hair, 
    AvatarStyle, 
    Accessories, 
    FacialHair,
    HairColour,
    Clothes,
    FabricColour,
    GraphicOnClothes,
    Eyebrow,
    Eyes,
    Mouth,
    Skin, 
    GetAvataaarsSettings 
} from "./models";

/**
 * Generates a avataaar image URL that you can supply to your `<img/>` tag.
 * @param settings {GetAvataaarsSettings} A settings object with any custom values.
 * @example Returns a URL for your image like: https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFro&accessoriesType=Prescription01&facialHairType=BeardLight
 */
export function generateAvatar(settings: GetAvataaarsSettings): string {
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