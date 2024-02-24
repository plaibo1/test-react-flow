type CustomNodesDataTypes = {
  osc: OscNodeData;
  amp: AmpDataType;
};

type OscNodeData = {
  frequency: number;
  type: OscillatorType;
};

type AmpDataType = {
  gain: number;
};
