import { Handle, NodeProps, Position } from "reactflow";
import { IStore, useStore } from "../store/store";

type RGBDataType = {
  value: number;
};

type e = React.ChangeEvent<HTMLInputElement>;

const selector = (id: string) => (store: IStore) => {
  return {
    changeColor: (e: e) => {
      store.updateNodeColor(id, +e.target.value);
    },
  };
};

export const RGBnode = ({ id, data }: NodeProps<RGBDataType>) => {
  const { changeColor } = useStore(selector(id));

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <input
        className="nodrag"
        type="range"
        min={0}
        max={255}
        step={1}
        value={data.value}
        onChange={changeColor}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
};
