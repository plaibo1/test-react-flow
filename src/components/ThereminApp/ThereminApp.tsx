import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  NodeTypes,
  Panel,
} from "reactflow";
import { IStore, useStore } from "./store/store";
import { Osc } from "./nodes/Osc";
import { Amp } from "./nodes/Amp";
import { Out } from "./nodes/Out";

import "reactflow/dist/style.css";

const selector = (store: IStore) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
  createAmpNode: store.createAmpNode,
  createOscNode: store.createOscNode,
  onNodesDelete: store.removeNodes,
  onEdgesDelete: store.removeEdges,
});

const nodeTypes: NodeTypes = {
  osc: Osc,
  amp: Amp,
  out: Out,
};

export const ThereminApp = () => {
  const store = useStore(selector);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={store.nodes}
        edges={store.edges}
        onNodesChange={store.onNodesChange}
        onEdgesChange={store.onEdgesChange}
        onConnect={store.addEdge}
        onNodesDelete={store.onNodesDelete}
        onEdgesDelete={store.onEdgesDelete}
        nodeTypes={nodeTypes}
        fitView
      >
        <Panel position="top-right">
          <span className="flex gap-3">
            <button
              className="p-4 bg-fuchsia-500 rounded-lg text-white font-bold border-2 border-slate-600"
              onClick={() => store.createOscNode()}
            >
              osc +
            </button>
            <button
              className="p-4 bg-indigo-500 rounded-lg text-white font-bold border-2 border-slate-600"
              onClick={() => store.createAmpNode()}
            >
              amp +
            </button>
          </span>
        </Panel>

        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
