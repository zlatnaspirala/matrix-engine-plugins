
export class planeUVFont {

  constructor(prefixPath) {
    if (typeof prefixPath === 'undefined') { 
      this.prefixPath = "./../../"; 
    } else {
      this.prefixPath = prefixPath;
    }

    this.currentFontTexture = this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/sample2.png";
  }

  charLoaded = () => {}

  onLoadObj = (meshes) => {
    // Default tex
    var tex = {
      source: [this.currentFontTexture],
      mix_operation: "multiply",
    };

    var All = Object.keys(meshes);
    All.forEach((item) => {
      matrixEngine.objLoader.initMeshBuffers(world.GL.gl, meshes[item]);
      world.Add("obj", 1, item, tex, meshes[item]);
      App.scene[item].position.SetY(0);
      this.charLoaded(App.scene[item]);
    });
  }

  /**
   * @description Load 3d alphabet objects
   * Because Slot source is not in same folder
   * with node_modules we can fix error path with
   * prefix path.
   * Default value "./../../"
   */
  loadFullFont = (objLoader) => {
    objLoader.downloadMeshes(
    {
      mCharA: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/a.obj"),
      mCharB: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/b.obj"),
      mCharC: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/c.obj"),
      mCharD: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/d.obj"),
      mCharE: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/e.obj"),
      mCharF: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/f.obj"),
      mCharG: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/g.obj"),
      mCharH: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/h.obj"),
      mCharI: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/i.obj"),
      mCharJ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/j.obj"),
      mCharK: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/k.obj"),
      mCharL: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/l.obj"),
      mCharM: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/m.obj"),
      mCharN: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/n.obj"),
      mCharO: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/o.obj"),
      mCharP: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/p.obj"),
      mCharR: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/r.obj"),
      mCharS: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/s.obj"),
      mCharT: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/t.obj"),
      mCharU: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/u.obj"),
      mCharW: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/w.obj"),
      mCharX: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/x.obj"),
      mCharY: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/y.obj"),
      mCharZ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/z.obj"),
      mCharQ: (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/b.obj"),
    },
      this.onLoadObj)
  }

  loadChar = (objLoader, myChar, identity) => {

    if (typeof myChar === 'undefined') {
      console.error('You miss main argument myChar =>  loadChar = (OBJ, myChar)');
      return false;
    }
    if (typeof identity === 'undefined') { var identity = "mChar"; }

    var injectArg = {};
    injectArg[identity + myChar.toUpperCase()] = (this.prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dUVPlaneFont/data/" + myChar + ".obj");
    objLoader.downloadMeshes(injectArg, this.onLoadObj);
  }

};
