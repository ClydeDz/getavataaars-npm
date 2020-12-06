# Get Avataaars
Generate an avatar by mixing-and-matching various elements.  

[![Build status](https://clydedsouza.visualstudio.com/Get%20Avataaars%20npm/_apis/build/status/Get%20Avataaars%20Main)](https://clydedsouza.visualstudio.com/Get%20Avataaars%20npm/_build/latest?definitionId=31)
[![Azure DevOps tests](https://img.shields.io/azure-devops/tests/clydedsouza/Get%2520Avataaars%2520npm/31?logo=azuredevops)](https://clydedsouza.visualstudio.com/Get%20Avataaars%20npm/_build?definitionId=31) 
[![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/clydedsouza/Get%20Avataaars%20npm/31.svg?logo=azuredevops)](https://clydedsouza.visualstudio.com/Get%20Avataaars%20npm/_build/latest?definitionId=31) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_getavataaars-npm&metric=alert_status)](https://sonarcloud.io/dashboard?id=ClydeDz_getavataaars-npm) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_getavataaars-npm&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ClydeDz_getavataaars-npm) 
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational) 
[![npm](https://img.shields.io/npm/v/getavataaars?color=brightgreen&logo=npm)](https://bit.ly/getavataaars)         

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