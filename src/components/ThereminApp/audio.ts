const context = new AudioContext();
const nodes = new Map();

const osc = context.createOscillator();
osc.frequency.value = 220;
osc.type = "square";
osc.start();

const amp = context.createGain();
amp.gain.value = 0.5;

const out = context.destination;

osc.connect(amp);
amp.connect(context.destination);

nodes.set("a", osc);
nodes.set("b", amp);
nodes.set("c", out);

export function isRunning() {
  return context.state === "running";
}

export function toggleAudio() {
  return isRunning() ? context.suspend() : context.resume();
}

export const updateAudioNode = <T>(id: string, data: T) => {
  const node = nodes.get(id);

  for (const [key, val] of Object.entries(data as Record<string, string>)) {
    if (node[key] instanceof AudioParam) {
      node[key].value = val;
    } else {
      node[key] = val;
    }
  }
};

export const removeAudioNode = (id: string) => {
  const node = nodes.get(id);

  node.disconnect();
  node.stop?.();

  nodes.delete(id);
};

export const createOscNodeAudioContext = (id: string, data: OscNodeData) => {
  const node = context.createOscillator();
  node.frequency.value = Number(data.frequency) || 0;
  node.type = data.type;
  node.start();

  nodes.set(id, node);
};

export const createAmpNodeAudioContext = (id: string, data: AmpDataType) => {
  const node = context.createGain();
  node.gain.value = data.gain || 0;

  nodes.set(id, node);
};

export const connect = (sourceId: string | null, targetId: string | null) => {
  const source = nodes.get(sourceId);
  const target = nodes.get(targetId);

  source.connect(target);
};

export const disconnect = (
  sourceId: string | null,
  targetId: string | null
) => {
  const source = nodes.get(sourceId);
  const target = nodes.get(targetId);

  source.disconnect(target);
};
