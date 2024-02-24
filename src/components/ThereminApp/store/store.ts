import {
  applyNodeChanges,
  applyEdgeChanges,
  EdgeChange,
  NodeChange,
  Edge,
  Node,
  Connection,
  addEdge as addReactFlowEdge,
} from "reactflow";

import { nanoid } from "nanoid";
import { create } from "zustand";
import {
  connect,
  createAmpNodeAudioContext,
  createOscNodeAudioContext,
  disconnect,
  isRunning,
  removeAudioNode,
  toggleAudio as toggleAudioContext,
  updateAudioNode,
} from "../audio";

import { nodes } from "./nodes";
import { edges } from "./edges";

export interface IStore {
  nodes: Node[];
  edges: Edge[];
  isRunning: boolean;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  addEdge: (data: Connection) => void;
  updateNode: <T>(id: string, data: T) => void;
  createOscNode: () => void;
  createAmpNode: () => void;
  toggleAudio: () => void;
  removeNodes: (nodes: Node[]) => void;
  removeEdges: (edges: Edge[]) => void;
}

export const useStore = create<IStore>((set, get) => ({
  nodes,
  edges,
  isRunning: isRunning(),

  toggleAudio() {
    toggleAudioContext().then(() => {
      set({ isRunning: isRunning() });
    });
  },

  createOscNode: () => {
    const id = nanoid();

    const data: OscNodeData = { frequency: 440, type: "sine" };
    const position = { x: 0, y: 0 };

    createOscNodeAudioContext(id, data);
    set({ nodes: [...get().nodes, { id, type: "osc", data, position }] });
  },

  createAmpNode: () => {
    const id = nanoid();

    const data: AmpDataType = { gain: 0.5 };
    const position = { x: 0, y: 0 };

    createAmpNodeAudioContext(id, data);
    set({ nodes: [...get().nodes, { id, type: "amp", data, position }] });
  },

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data: Connection) {
    const id = nanoid(6);
    const edge = { id, ...data };

    set({ edges: addReactFlowEdge(edge, get().edges) });

    connect(data.source, data.target);
  },

  updateNode(id: string, data) {
    updateAudioNode(id, data);

    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  removeNodes(deleted) {
    for (const { id } of deleted) {
      removeAudioNode(id);
    }
  },

  removeEdges(deleted) {
    for (const { source, target } of deleted) {
      disconnect(source, target);
    }
  },
}));
