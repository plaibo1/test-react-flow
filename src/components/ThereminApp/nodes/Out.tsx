import { Handle, Position } from "reactflow";
import { IStore, useStore } from "../store/store";

const selector = (store: IStore) => ({
  isRunning: store.isRunning,
  toggleAudio: store.toggleAudio,
});

export const Out = () => {
  const { isRunning, toggleAudio } = useStore(selector);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <Handle type="target" position={Position.Top} />

      <div>
        <button
          className="flex justify-center items-center flex-col w-full"
          onClick={toggleAudio}
        >
          <span className="text-sm font-bold">Output Node</span>

          {isRunning ? (
            <span role="img" aria-label="mute">
              click to off 🔇
            </span>
          ) : (
            <span role="img" aria-label="unmute">
              click to on 🔈
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
