# Get Avataaars
Generate an avatar by mixing-and-matching various elements.

## Usage
After installing, simply import Get Avataaars in your file.
```javascript
const avatars = require("getavataaars");
```
Consume the `generateAvatar()` API to get an avatar URL that you can use directly as an image. Supply the settings object to customize your avatar. All settings are pretty self-explanatory and matches the [web editor](https://getavataaars.com/). Adding the following code, for example:
```javascript
var image = avatars.generateAvatar({
            Hair: avatars.Hair.Eyepatch,
            Accessories: avatars.Accessories.Kurt,
            Eyebrow: avatars.Eyebrow.Angry
        }); 
```
Would produce the following image:   
![image](https://avataaars.io/?accessoriesType=Kurt&eyebrowType=Angry&topType=Eyepatch)

## Credits   
[Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).    
[Web editor](https://getavataaars.com/) by [Fang-Pen Lin](https://twitter.com/fangpenlin).   
[React npm package](https://www.npmjs.com/package/avataaars) by [Fang-Pen Lin](https://twitter.com/fangpenlin).    
This NPM package is developed by [Clyde D'Souza](https://twitter.com/clydedz).