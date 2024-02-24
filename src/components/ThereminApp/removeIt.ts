// type appleData = {
//   ironPercent: number;
// };

// type milkData = {
//   lactose: boolean;
//   name: string;
// };

// const apple: appleData = {
//   ironPercent: 50,
// };

// const milk: milkData = {
//   lactose: true,
//   name: "Prosto kvashino",
// };

// type Example = appleData | milkData;

// export const generateSomething = (type: string, data: Example) => {
//   switch (type) {
//     case "apple": {
//       apple.ironPercent = data.ironPercent;
//       break;
//     }

//     case "milk": {
//       milk.lactose = data.lactose;
//       milk.name = data.name;
//       break;
//     }
//   }
// };

// export const createAudioNode = <
//   T extends Record<string, OscNodeData | AmpDataType>
// >(
//   id: string,
//   type: string,
//   data: T
// ) => {
//   switch (type) {
//     case "osc": {
//       const node = context.createOscillator();
//       node.frequency.value = Number(data.frequency) || 0;
//       node.type = (data.type as unknown as OscillatorType) || "triangle";
//       node.start();

//       nodes.set(id, node);
//       break;
//     }

//     case "amp": {
//       const node = context.createGain();
//       node.gain.value = Number(data.gain) || 0;

//       nodes.set(id, node);
//       break;
//     }
//   }
// };
