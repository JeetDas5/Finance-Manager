import { motion } from "framer-motion";
import arrows from "../../assets/Arrows.png";
import container from "../../assets/Container.png";

const Hero = () => {
  return (
    <div className="text-white flex gap-12 max-sm:flex-col">
      <div className="w-3/5 min-h-96 p-2 m-8 max-sm:w-full max-sm:items-center max-sm:justify-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold leading-6 p-4"
        >
          <span>Welcome to LedgerLink Empowering Your</span>
        </motion.h1>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold leading-6 p-4"
        >
          <span className="text-greenish">Financial Decisions</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, at est
          facere sed quidem fugiat rem minima ipsum eligendi officiis sequi iste
          eius suscipit voluptate optio quod adipisci illo laudantium.
        </motion.p>
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-greenish rounded-full text-black w-40 h-10 left-2 ml-4 hover:bg-lime-600 hover:scale-105 max-sm:ml-20 max-sm:items-center max-sm:justify-center"
        >
          View Transcation
        </motion.button>
      </div>
      <div className="w-2/5 min-h-96 max-sm:w-full">
        <div className="">
          <motion.img
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={arrows}
            alt="arrow"
            className="absolute w-72 h-72 ml-40 z-10"
          />
          <motion.img
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={container}
            alt="arrow"
            className="absolute ml-20 w-72 h-80 z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;