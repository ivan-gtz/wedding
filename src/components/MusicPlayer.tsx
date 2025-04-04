// components/SimpleMusicPlayer.tsx
'use client'; // Necesario para interactividad del lado del cliente

import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Iconos SVG ---
const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"} // Tamaño por defecto
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
      clipRule="evenodd"
    />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"} // Tamaño por defecto
  >
    <path
      fillRule="evenodd"
      d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Helper para formatear tiempo ---
const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};


// --- Props del Componente ---
interface SimpleMusicPlayerProps {
  audioSrc: string;
}

// --- Componente Principal ---
const MusicPlayer: React.FC<SimpleMusicPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Carga metadatos y configura listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      if (audio.duration !== Infinity) { // Evita duración infinita (streams)
         setDuration(audio.duration);
      }
       setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    // Asigna la fuente una sola vez si cambia
    if (audio.src !== audioSrc) {
        audio.src = audioSrc;
        setIsPlaying(false); // Resetea estado al cambiar src
        setCurrentTime(0);
        setDuration(0);
    }


    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
     // Listener para cuando la canción termina
    audio.addEventListener('ended', () => setIsPlaying(false));


    // Cleanup
    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audioSrc]); // Depende de audioSrc para recargar si cambia la canción

  // Controla Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error al reproducir audio:", error);
          setIsPlaying(false); // Vuelve a estado 'pausado' si hay error
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handler para Play/Pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handler para click en barra de progreso
  const handleProgressClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (!progressBar || !audio || !duration) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = progressBar.offsetWidth;
    const percentage = clickX / width;
    const newTime = duration * percentage;

    if (isFinite(newTime)) {
        audio.currentTime = newTime;
        setCurrentTime(newTime); // Actualiza visualmente de inmediato
    }
  }, [duration]); // Depende de duration

  // Calcula el porcentaje de progreso
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center space-x-1 p-1 bg-stone-50 rounded-lg text-gray-800"> {/* Contenedor principal */}
      {/* Botón Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="flex-shrink-0 text-gray-700 hover:text-black transition-colors duration-150 focus:outline-none"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying
           ? <PauseIcon className="w-7 h-7 md:w-6 md:h-6" />
           : <PlayIcon className="w-7 h-7 md:w-6 md:h-6" />
         }
      </button>

      {/* Tiempo */}
      <div className="text-xs md:text-sm flex-shrink-0 font-mono text-gray-700">
        {/* <span>{formatTime(currentTime)}</span> */}
        {/* <span className="mx-1">/</span> */}
        {/* <span>{formatTime(duration)}</span> */}
      </div>

      {/* Barra de Progreso */}
      <div
        ref={progressBarRef}
        className="relative flex-grow h-1.5 bg-gray-200 rounded-full cursor-pointer group" // 'group' para hover effect si se quisiera
        onClick={handleProgressClick}
      >
        {/* Progreso */}
        <div
          className="absolute top-0 left-0 h-full bg-gray-700 rounded-full" // Color de la barra de progreso
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <audio ref={audioRef} preload="metadata" />
    </div>
  );
};

export default MusicPlayer;