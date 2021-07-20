# matrix-engine-plugins
## Status operative


Plugins structure:
 - Aceess folders represent scripting , data folder containe data files (any).
<pre>
 ├── matrix-fonts/           (Category)
 |   ├── 2dPlaneFont/
 |       ├── access/
 |       └── data/
 |   ├── 2dUVPlaneFont/
 |       ├── access/
 |       └── data/
</pre>

## Plugin 2d plane
obj text typo export from default blender text.

### How to use it intro matrix-engine projects:

#### Install:
```js
npm i matrix-engine-plugins
```

#### Import:
```js
import { planeFont, planeUVFont } from "matrix-engine-plugins";
```

#### Load single char
```js
var font = new planeUVFont();
font.loadChar(matrixEngine.OBJ, "s", "headerTitle");

font.charLoaded = (obj) => {
  // Loaded
};
```

# Credits
 - Blender 3d software
 - Gimp
