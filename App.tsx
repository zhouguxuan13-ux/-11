import React, { Suspense } from 'react';
import Experience from './components/Experience';
import HandController from './components/HandController';
import Overlay from './components/Overlay';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Scene Layer */}
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white font-mono">Loading Magic...</div>}>
        <Experience />
      </Suspense>

      {/* UI Overlay Layer */}
      <Overlay />

      {/* Computer Vision Layer */}
      <HandController />
    </div>
  );
};

export default App;
