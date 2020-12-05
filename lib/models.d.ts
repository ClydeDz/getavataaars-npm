export declare enum Hair {
    NoHair = "NoHair",
    Eyepatch = "Eyepatch",
    Hat = "Hat",
    Hijab = "Hijab",
    Turban = "Turban",
    WinterHat1 = "WinterHat1",
    WinterHat2 = "WinterHat2",
    WinterHat3 = "WinterHat3",
    WinterHat4 = "WinterHat4",
    LongHairBigHair = "LongHairBigHair",
    LongHairBob = "LongHairBob",
    LongHairBun = "LongHairBun",
    LongHairCurly = "LongHairCurly",
    LongHairCurvy = "LongHairCurvy",
    LongHairDreads = "LongHairDreads",
    LongHairFrida = "LongHairFrida",
    LongHairFro = "LongHairFro",
    LongHairFroBand = "LongHairFroBand",
    LongHairNotTooLong = "LongHairNotTooLong",
    LongHairShavedSides = "LongHairShavedSides",
    LongHairMiaWallace = "LongHairMiaWallace",
    LongHairStraight = "LongHairStraight",
    LongHairStraight2 = "LongHairStraight2",
    LongHairStraightStrand = "LongHairStraightStrand",
    ShortHairDreads01 = "ShortHairDreads01",
    ShortHairDreads02 = "ShortHairDreads02",
    ShortHairFrizzle = "ShortHairFrizzle",
    ShortHairShaggyMullet = "ShortHairShaggyMullet",
    ShortHairShortCurly = "ShortHairShortCurly",
    ShortHairShortFlat = "ShortHairShortFlat",
    ShortHairShortRound = "ShortHairShortRound",
    ShortHairShortWaved = "ShortHairShortWaved",
    ShortHairSides = "ShortHairSides",
    ShortHairTheCaesar = "ShortHairTheCaesar",
    ShortHairTheCaesarSidePart = "ShortHairTheCaesarSidePart"
}
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export declare enum Accessories {
    Blank = "Blank",
    Kurt = "Kurt",
    Prescription01 = "Prescription01",
    Prescription02 = "Prescription02",
    Round = "Round",
    Sunglasses = "Sunglasses",
    Wayfarers = "Wayfarers "
}
export declare enum FacialHair {
    Blank = "Blank",
    BeardMedium = "BeardMedium",
    BeardLight = "BeardLight",
    BeardMagestic = "BeardMagestic",
    MoustacheFancy = "MoustacheFancy",
    MoustacheMagnum = "MoustacheMagnum"
}
export declare enum HairColour {
    Auburn = "Auburn",
    Black = "Black",
    Blonde = "Blonde",
    BlondeGolden = "BlondeGolden",
    Brown = "Brown",
    BrownDark = "BrownDark",
    Platinum = "Platinum",
    Red = "Red"
}
export declare enum Clothes {
    BlazerShirt = "BlazerShirt",
    BlazerSweater = "BlazerSweater",
    CollarSweater = "CollarSweater",
    GraphicShirt = "GraphicShirt",
    Hoodie = "Hoodie",
    Overall = "Overall",
    ShirtCrewNeck = "ShirtCrewNeck",
    ShirtScoopNeck = "ShirtScoopNeck",
    ShirtVNeck = "ShirtVNeck"
}
export declare enum FabricColour {
    Black = "Black",
    Blue01 = "Blue01",
    Blue02 = "Blue02",
    Blue03 = "Blue03",
    Gray01 = "Gray01",
    Gray02 = "Gray02",
    Heather = "Heather",
    PastelBlue = "PastelBlue",
    PastelGreen = "PastelGreen",
    PastelOrange = "PastelOrange",
    PastelRed = "PastelRed",
    PastelYellow = "PastelYellow",
    Pink = "Pink",
    Red = "Red",
    White = "White"
}
export declare enum GraphicOnClothes {
    Bat = "Bat",
    Cumbia = "Cumbia",
    Deer = "Deer",
    Diamond = "Diamond",
    Hola = "Hola",
    Pizza = "Pizza",
    Resist = "Resist",
    Selena = "Selena",
    Bear = "Bear",
    SkullOutline = "SkullOutline",
    Skull = "Skull"
}
export declare enum Eyes {
    Close = "Close",
    Cry = "Cry",
    Default = "Default",
    Dizzy = "Dizzy",
    EyeRoll = "EyeRoll",
    Happy = "Happy",
    Hearts = "Hearts",
    Side = "Side",
    Squint = "Squint",
    Surprised = "Surprised",
    Wink = "Wink",
    WinkWacky = "WinkWacky"
}
export declare enum Eyebrow {
    Angry = "Angry",
    AngryNatural = "AngryNatural",
    Default = "Default",
    DefaultNatural = "DefaultNatural",
    FlatNatural = "FlatNatural",
    RaisedExcited = "RaisedExcited",
    RaisedExcitedNatural = "RaisedExcitedNatural",
    SadConcerned = "SadConcerned",
    SadConcernedNatural = "SadConcernedNatural",
    UnibrowNatural = "UnibrowNatural",
    UpDown = "UpDown",
    UpDownNatural = "UpDownNatural"
}
export declare enum Mouth {
    Concerned = "Concerned",
    Default = "Default",
    Disbelief = "Disbelief",
    Eating = "Eating",
    Grimace = "Grimace",
    Sad = "Sad",
    ScreamOpen = "ScreamOpen",
    Serious = "Serious",
    Smile = "Smile",
    Tongue = "Tongue",
    Twinkle = "Twinkle",
    Vomit = "Vomit"
}
export declare enum Skin {
    Tanned = "Tanned",
    Yellow = "Yellow",
    Pale = "Pale",
    Light = "Light",
    Brown = "Brown",
    DarkBrown = "DarkBrown",
    Black = "Black"
}
/**
 * Settings that you can supply to generate an avataaar.
 */
export interface GetAvataaarsSettings {
    /**
     * Choose from multiple types of hair styles.
     */
    Hair?: Hair;
    /**
     * Choose different background styles for your avataaar.
     */
    AvatarStyle?: AvatarStyle;
    /**
     * Choose from multiple types of accessories.
     */
    Accessories?: Accessories;
    /**
     * Choose from different styles of facial hair.
     */
    FacialHair?: FacialHair;
    /**
     * Choose from different types of hair colour.
     */
    HairColour?: HairColour;
    /**
     * Choose from multiple types of clothes.
     */
    Clothes?: Clothes;
    /**
     * Choose different colours for your clothes.
     */
    FabricColour?: FabricColour;
    /**
     * Choose different prints on your clothes.
     */
    GraphicOnClothes?: GraphicOnClothes;
    /**
     * Choose from multiple types of eyebrows.
     */
    Eyebrow?: Eyebrow;
    /**
     * Choose from multiple types of eyes.
     */
    Eyes?: Eyes;
    /**
     * Choose from multiple types of mouth styles.
     */
    Mouth?: Mouth;
    /**
     * Choose from different types of skin colour.
     */
    Skin?: Skin;
}
