import { motion } from "motion/react";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgb(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="[perspective::1000px] transform-3d min-h-screen w-full bg-neutral-900 flex items-center justify-center"
    >
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 10,
          scale: 1.5,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.3)",
        }}
        whileTap={{
          scale: 0,
        }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
        style={{
          translateZ: 100,
        }}
        className="rounded-md group hover:text-cyan-500 transition-all duration-500 ease-in-out  bg-black px-12 py-2  text-neutral-400 relative  cursor-pointer"
      >
        Subscribe
        <span className="bg-linear-to-r group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out from-transparent from-10% via-cyan-500 to-transparent to-90% w-full h-px inset-x-0   absolute bottom-0"></span>
        <span className="bg-linear-to-r group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out from-transparent from-10%  via-cyan-500 to-transparent to-90% w-full h-px inset-x-0   absolute -bottom-0.5 blur-xs "></span>
      </motion.button>
    </div>
  );
};

export default App;
