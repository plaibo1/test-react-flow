import ReactFlow, { NodeTypes } from "reactflow";
import { IStore, useStore } from "./store/store";
import { RGBnode } from "./nodes/RGBnode";

const selector = (state: IStore) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes: NodeTypes = {
  colorValue: RGBnode,
};

export const ColorFlow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useStore(selector);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    />
  );
};
