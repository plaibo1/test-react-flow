import {
  EdgeChange,
  NodeChange,
  Edge,
  Node,
  Connection,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import { create } from "zustand";

import { nodes } from "./nodes";
import { edges } from "./edges";

export interface IStore {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  setNodes: (nodes: Node[]) => void;
  setEdges: (nodes: Edge[]) => void;
  updateNodeColor: (id: string, value: number) => void;
}

export const useStore = create<IStore>((set, get) => ({
  nodes,
  edges,

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  setNodes: (nodes) => {
    set({ nodes });
  },

  setEdges: (edges) => {
    set({ edges });
  },

  updateNodeColor: (id, value) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          // it's important to create a new object here, to inform React Flow about the cahnges
          node.data = { ...node.data, value };
        }

        return node;
      }),
    });
  },
}));
