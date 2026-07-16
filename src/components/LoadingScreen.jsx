import React from 'react';

const LoadingScreen = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center transition-[visibility] duration-0 ${
        loading ? 'visible' : 'invisible delay-[1350ms] pointer-events-none'
      }`}
      aria-hidden={!loading}
    >
      {/* Left curtain */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-white transition-transform duration-[1350ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          loading ? 'translate-x-0' : '-translate-x-full'
        }`}
      />
      {/* Right curtain */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-white transition-transform duration-[1350ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          loading ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
      {/* Loader center copy */}
      <div
        className={`relative z-[10000] grid justify-items-center gap-2.5 transition-all duration-[750ms] ${
          loading ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.96] pointer-events-none'
        }`}
      >
        <div
          className="relative overflow-hidden w-8 h-8 bg-white border-2 border-[#08060d] animate-[loading-box-rotate_2.8s_ease-in-out_infinite,loading-box-base_2.8s_linear_infinite]"
          aria-hidden="true"
        >
          <span className="absolute -inset-[1px] bg-[#08060d] animate-[loading-box-fill_2.8s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
        </div>
        <span className="text-[#08060d] font-sans text-[0.9rem] font-bold tracking-[0.32em] uppercase opacity-[0.62]">
          Loading
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
