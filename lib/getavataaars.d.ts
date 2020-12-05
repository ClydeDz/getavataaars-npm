import { GetAvataaarsSettings } from "./models";
export { Hair, AvatarStyle, Accessories, FacialHair, HairColour, Clothes, FabricColour, GraphicOnClothes, Eyebrow, Eyes, Mouth, Skin, GetAvataaarsSettings } from "./models";
/**
 * Generates a avataaar image URL that you can supply to your `<img/>` tag.
 * @param settings {GetAvataaarsSettings} A settings object with any custom values.
 * @example Returns a URL for your image like: https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFro&accessoriesType=Prescription01&facialHairType=BeardLight
 */
export declare function generateAvatar(settings: GetAvataaarsSettings): string;
