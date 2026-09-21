import { createAudioPlayer, AudioSource, AudioPlayer } from "expo-audio";
import React, { createContext, useContext, useRef } from "react";

type AudioContextType = {
  playSound: (source: AudioSource) => void;
  stop: () => void;
};

const AudioContext = createContext<AudioContextType>({
  playSound: () => {},
  stop: () => {},
});

interface AudioProviderProps {
  children: React.ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const playerRef = useRef<AudioPlayer | null>(null);

  const playSound = (source: AudioSource) => {
    playerRef.current?.remove();
    const player = createAudioPlayer(source);
    playerRef.current = player;
    player.play();
  };

  const stop = () => {
    playerRef.current?.pause();
  };

  return (
    <AudioContext.Provider value={{ playSound, stop }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAppAudio = () => useContext(AudioContext);
