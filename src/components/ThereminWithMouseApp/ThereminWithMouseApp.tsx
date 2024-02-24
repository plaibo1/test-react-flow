import React, { useEffect } from "react";

// Create the brain of our audio-processing graph
const context = new AudioContext();

// Create an oscillator node to generate tones
const osc = context.createOscillator();

// Create a gain node to control the volume
const amp = context.createGain();

// Pass the oscillator's output through the gain node and to our speakers
osc.connect(amp);
amp.connect(context.destination);

// Start generating those tones!
osc.start();

const updateValues = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const freq = (e.clientX / window.innerWidth) * 1000;
  const gain = e.clientY / window.innerHeight;

  osc.frequency.value = freq;
  amp.gain.value = gain;
};

const toggleAudio = () => {
  if (context.state === "suspended") {
    context.resume();
  } else {
    context.suspend();
  }
};

export const ThereminWithMouseApp = () => {
  useEffect(() => {
    return () => {
      context.suspend();
    };
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex justify-center items-center"
      onMouseMove={updateValues}
      onClick={toggleAudio}
    >
      <span className="text-slate-500 font-black text-2xl">
        click and mousemove
      </span>
    </div>
  );
};
