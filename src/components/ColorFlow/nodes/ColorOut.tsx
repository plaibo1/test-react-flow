import { Handle, NodeProps, Position, getIncomers } from "reactflow";
import { IStore, useStore } from "../store/store";

const selector = (store: IStore) => {
  return {
    nodes: store.nodes,
    edges: store.edges,
  };
};

export const ColorOut = ({ id, data, ...rest }: NodeProps) => {
  const { edges, nodes } = useStore(selector);

  const connectedNodes = getIncomers(
    { id, data, position: { x: rest.xPos, y: rest.yPos } },
    nodes,
    edges
  );

  return (
    <div
      style={{
        backgroundColor:
          connectedNodes.length >= 3
            ? `rgb(${connectedNodes[0].data.value}, ${connectedNodes[1].data.value}, ${connectedNodes[2].data.value})`
            : "",
      }}
      className="bg-white rounded-xl shadow-lg p-4 w-14 h-14"
    >
      <Handle type="target" position={Position.Top} />
    </div>
  );
};
