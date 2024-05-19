import { motion } from 'framer-motion';
import { World } from './globe.tsx';
import { globeConfig, sampleArcs } from './globe_data.ts';

export function GlobeDemo() {
  return (
    <div className="flex flex-row items-center justify-center h-auto relative ">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        ></motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40  pointer-events-none select-none z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}
