/* eslint-disable @typescript-eslint/no-var-requires */
const avatars = require("getavataaars");
var image = avatars.generateAvatar({
    Hair: avatars.Hair.Eyepatch,
    Accessories: avatars.Accessories.Kurt,
    Eyebrow: avatars.Eyebrow.Angry
}); 
console.log(image);
