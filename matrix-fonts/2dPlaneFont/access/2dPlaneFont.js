
export let MEPlugin = {
  test: "test"
}

export class planeFont {

  onLoadObj(meshes) {

    App.meshes = meshes;
    OBJ.initMeshBuffers(world.GL.gl, App.meshes.mCharA);

    var textuteImageSamplers2 = {
      source: ["access/data/sample1.png"],
      mix_operation: "multiply",
    };

    world.Add("obj", 1, "mCharA", textuteImageSamplers2, App.meshes.mCharA);
    App.scene.mCharA.position.y = 1;
    App.scene.mCharA.rotation.rotationSpeed.y = 20;
    App.scene.mCharA.LightsData.ambientLight.set(1, 1, 1);

  }

  load = (OBJ) => {
    OBJ.downloadMeshes(
      {mCharA: "data/a.obj", mCharB: "access/data/b.obj"},
      this.onLoadObj)
  }

};