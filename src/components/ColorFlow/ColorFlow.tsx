import ReactFlow, { NodeTypes, ReactFlowProvider } from "reactflow";
import { IStore, useStore } from "./store/store";
import { RGBnode } from "./nodes/RGBnode";
import { ColorOut } from "./nodes/ColorOut";

const selector = (state: IStore) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes: NodeTypes = {
  colorValue: RGBnode,
  colorOut: ColorOut,
};

export const ColorFlow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useStore(selector);

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </ReactFlowProvider>
  );
};
