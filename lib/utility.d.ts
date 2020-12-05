import { Hair, AvatarStyle, Accessories, FacialHair, HairColour, Clothes, FabricColour, GraphicOnClothes, Eyebrow, Eyes, Mouth, Skin } from "./models";
export declare class Utility {
    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    resolveSettings(key: string, setting: Hair | AvatarStyle | Accessories | FacialHair | HairColour | Clothes | FabricColour | GraphicOnClothes | Eyebrow | Eyes | Mouth | Skin | undefined): string;
    /**
     * Remove the `&` and `?` characters from the end of the URL if it exists.
     * @param apiURL The API URL being constructed
     */
    trimInvalidCharactersIfExists(apiURL: string): string;
}
