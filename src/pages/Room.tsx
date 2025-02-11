import { createSignal } from "solid-js";
import { Scene } from "../Scene";

function Room() {
  const [model, setModel] = createSignal("my-model.glb");
  return (
    <>
      <Scene model={model()} />
      <div class="pointer-events-none absolute bottom-4 left-4 z-10 flex gap-2 [&>*]:pointer-events-auto">
        <button
          onclick={() => {
            const el = document.querySelector("[environment]");
            if (!el) return;
            // @ts-ignore
            if (el.getAttribute("environment").preset === "forest") {
              el.setAttribute("environment", "preset: arches");
            } else {
              el.setAttribute("environment", "preset: forest");
            }
          }}
          class="cursor-pointer rounded-xl border-4 border-black/80 bg-white px-4 py-1 font-bold text-black/80 hover:border-[#ef2d5e] hover:text-[#ef2d5e]"
        >
          Change environment
        </button>
        <button
          onclick={() => setModel("my-other-model.glb")}
          class="cursor-pointer rounded-xl border-4 border-black/80 bg-white px-4 py-1 font-bold text-black/80 hover:border-[#ef2d5e] hover:text-[#ef2d5e]"
        >
          Change model
        </button>
      </div>
    </>
  );
}

export default Room;
