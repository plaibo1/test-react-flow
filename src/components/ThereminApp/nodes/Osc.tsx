import { Handle, Position, NodeProps } from "reactflow";
import { IStore, useStore } from "../store/store";

type eInput = React.ChangeEvent<HTMLInputElement>;
type eSelect = React.ChangeEvent<HTMLSelectElement>;

const selector = (id: string) => (store: IStore) => ({
  setFrequency: (e: eInput) =>
    store.updateNode<Partial<OscNodeData>>(id, {
      frequency: +e.target.value,
    }),

  setType: (e: eSelect) =>
    store.updateNode<Partial<OscNodeData>>(id, {
      type: e.target.value as OscNodeData["type"],
    }),
});

export const Osc = ({ id, data }: NodeProps<OscNodeData>) => {
  const { setFrequency, setType } = useStore(selector(id));

  return (
    <div className="overflow-hidden bg-white shadow-md rounded-md">
      <div className="w-fill p-2 bg-fuchsia-500">
        <p className="font-bold text-white">Oscillator Node</p>
      </div>

      <div className="p-6">
        <label className="block mb-4">
          <span className="block">Frequency</span>
          <input
            className="nodrag"
            type="range"
            min="10"
            max="1000"
            value={data.frequency}
            onChange={setFrequency}
          />
          <span className="block text-indigo-500">{data.frequency}Hz</span>
        </label>

        <label className="block">
          <span className="font-bold block">Waveform</span>
          <select className="nodrag" value={data.type} onChange={setType}>
            <option value="sine">sine</option>
            <option value="triangle">triangle</option>
            <option value="sawtooth">sawtooth</option>
            <option value="square">square</option>
          </select>
        </label>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
