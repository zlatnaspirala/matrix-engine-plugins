
export class planeUVFont {

  onLoadObj(meshes) {
    // App.meshes = meshes;
    // Default
    var tex = {
      source: ["./../../node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/sample1.png"],
      mix_operation: "multiply",
    };

    var All = Object.keys(meshes);
    All.forEach((item) => {
      OBJ.initMeshBuffers(world.GL.gl, meshes[item]);
      world.Add("obj", 1, item, tex, meshes[item]);
      App.scene[item].position.y = 0;
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
  loadFullFont = (OBJ, prefixPath) => {

    if (typeof prefixPath === 'undefined') { var prefixPath = "./../../"; }
    OBJ.downloadMeshes(
    {
      mCharA: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/a.obj"),
      mCharB: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/b.obj"),
      mCharC: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/c.obj"),
      mCharD: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/d.obj"),
      mCharE: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/e.obj"),
      mCharF: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/f.obj"),
      mCharG: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/g.obj"),
      mCharH: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/h.obj"),
      mCharI: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/i.obj"),
      mCharJ: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/j.obj"),
      mCharK: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/k.obj"),
      mCharL: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/l.obj"),
      mCharM: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/m.obj"),
      mCharN: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/n.obj"),
      mCharO: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/o.obj"),
      mCharP: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/p.obj"),
      mCharR: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/r.obj"),
      mCharS: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/s.obj"),
      mCharT: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/t.obj"),
      mCharU: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/u.obj"),
      mCharW: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/w.obj"),
      mCharX: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/x.obj"),
      mCharY: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/y.obj"),
      mCharZ: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/z.obj"),
      mCharQ: (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/b.obj"),
    },
      this.onLoadObj)
  }

  loadChar = (OBJ, myChar, identity, prefixPath) => {

    if (typeof myChar === 'undefined') {
      console.error('You miss main argument myChar =>  loadChar = (OBJ, myChar)');
      return false;
    }

    if (typeof prefixPath === 'undefined') { var prefixPath = "./../../"; }
    if (typeof identity === 'undefined') { var identity = "mChar"; }

    var injectArg = {};
    injectArg[identity + myChar.toUpperCase()] = (prefixPath + "node_modules/matrix-engine-plugins/matrix-fonts/2dPlaneFont/data/" + myChar + ".obj");
    OBJ.downloadMeshes(injectArg, this.onLoadObj);
  }

};