import { Node } from "reactflow";

export const nodes: Node[] = [
  {
    id: "a",
    data: { frequency: 220, type: "square" },
    type: "osc",
    position: { x: 0, y: 0 },
  },
  {
    id: "b",
    data: { gain: 0.5 },
    type: "amp",
    position: { x: -100, y: 270 },
  },
  {
    id: "c",
    data: {},
    type: "out",
    position: { x: 50, y: 480 },
  },
];
