import { onCleanup, onMount } from "solid-js";
import { primitive } from "./signals";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": any;
      "a-entity": any;
      "a-assets": any;
      "a-asset-item": any;
      "a-mixin": any;
      "a-sphere": any;
      "a-torus": any;
      "a-gltf-model": any;
      "a-light": any;
    }
  }
}

export function Scene() {
  onMount(() => {
    // Because a-scene is in a div, we need this additional style otherwise the VR button is not visible.
    document.querySelector("#root")!.setAttribute("style", "position: absolute; inset: 0;");
  });
  onCleanup(() => {
    document.querySelector("#root")!.removeAttribute("style");
    // Remove class that was added by aframe, otherwise we can't scroll when we go back to a non- A-Frame page. (not needed in aframe 1.7.0)
    document.querySelector("html")!.classList.remove("a-fullscreen");
  });
  return (
    <a-scene
      renderer="physicallyCorrectLights: true;"
      networked-scene="
          room: basic;
          adapter: wseasyrtc;"
    >
      <a-entity id="cameraRig">
        <a-entity
          id="player"
          networked="template: #avatar-template; attachTemplateToLocal: false;"
          camera
          position="0 1.6 0"
          spawn-in-circle="radius:3"
          wasd-controls
          look-controls
        >
          <a-sphere class="head" visible="false" random-color></a-sphere>
        </a-entity>
      </a-entity>

      <a-entity environment="preset: arches"></a-entity>
      <a-entity light="type: ambient; intensity: 1.0"></a-entity>

      <a-entity attr:geometry={`primitive: ${primitive()}`} position="0 2 0"></a-entity>
    </a-scene>
  );
}
