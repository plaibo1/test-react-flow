import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { IStore, useStore } from "../store/store";

const selector = (id: string) => (store: IStore) => {
  return {
    changeGainValue: (e: React.ChangeEvent<HTMLInputElement>) => {
      store.updateNode<AmpDataType>(id, { gain: +e.target.value });
    },
  };
};

export const Amp = ({ id, data }: NodeProps<AmpDataType>) => {
  const { changeGainValue } = useStore(selector(id));

  return (
    <div className="overflow-auto bg-white shadow-md rounded-md">
      <Handle type="target" position={Position.Top} />

      <div className="w-fill p-2 bg-indigo-500">
        <p className="font-bold text-white">Amp Node</p>
      </div>

      <div className="p-6">
        <label className="block mb-4">
          <span className="block">Gain</span>

          <input
            className="nodrag"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={data.gain}
            onChange={changeGainValue}
          />
          <span className="block text-indigo-500">{data.gain}</span>
        </label>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
