
export class planeFont {

  constructor(prefixPath) {
    if (typeof prefixPath === 'undefined') { 
      this.prefixPath = "./../../"; 
    } else {
      this.prefixPath = prefixPath;
    }
    this.currentFontTexture = this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/sample1.png";
  }

  onLoadObj(meshes) {
    // Default
    var tex = {
      source: [this.currentFontTexture],
      mix_operation: "multiply",
    };

    var All = Object.keys(meshes);
    All.forEach((item) => {
      matrixEngine.objLoader.initMeshBuffers(world.GL.gl, meshes[item]);
      world.Add("obj", 1, item, tex, meshes[item]);
      App.scene[item].position.setY(0);
      this.charLoaded(App.scene[item]);
    });
    // App.scene.mCharA.LightsData.ambientLight.set(1, 1, 1);

  }

  /**
   * @description Load 3d alphabet objects
   * Because Slot source is not in same folder
   * with node_modules we can fix error path with
   * prefix path.
   * Default value "./../../"
   */
  loadFullFont = (OBJ) => {
    OBJ.downloadMeshes(
    {
      mCharA: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/a.obj"),
      mCharB: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/b.obj"),
      mCharC: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/c.obj"),
      mCharD: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/d.obj"),
      mCharE: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/e.obj"),
      mCharF: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/f.obj"),
      mCharG: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/g.obj"),
      mCharH: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/h.obj"),
      mCharI: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/i.obj"),
      mCharJ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/j.obj"),
      mCharK: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/k.obj"),
      mCharL: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/l.obj"),
      mCharM: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/m.obj"),
      mCharN: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/n.obj"),
      mCharO: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/o.obj"),
      mCharP: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/p.obj"),
      mCharR: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/r.obj"),
      mCharS: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/s.obj"),
      mCharT: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/t.obj"),
      mCharU: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/u.obj"),
      mCharW: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/w.obj"),
      mCharX: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/x.obj"),
      mCharY: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/y.obj"),
      mCharZ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/z.obj"),
      mCharQ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/b.obj"),
    },
      this.onLoadObj)
  }

  loadChar = (OBJ, myChar, identity) => {

    if (typeof myChar === 'undefined') {
      console.error('You miss main argument myChar =>  loadChar = (OBJ, myChar)');
      return false;
    }

    if (typeof identity === 'undefined') { var identity = "mChar"; }

    var injectArg = {};
    injectArg["mChar" + myChar.toUpperCase()] = (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/" + myChar + ".obj");
    OBJ.downloadMeshes(injectArg, this.onLoadObj);
  }

};