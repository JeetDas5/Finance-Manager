import { motion } from "framer-motion";
import navbar from "../../assets/navbar-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black min-h-36 p-10 grid">
      <div className="p-2 text-white bg-blackish max-h-24 rounded-full flex flex-row justify-between">
        <div className="mt-6">
          <motion.img
            src={navbar}
            alt="icon"
            className="w-6 h-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex flex-row justify-center max-sm:items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hover:scale-110 m-2 border-2 rounded-full p-4 border-blackish hover:bg-greyish cursor-pointer max-sm:hidden"
          >
            Home
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hover:scale-110 m-2 border-2 rounded-full p-4 border-blackish hover:bg-greyish cursor-pointer max-sm:hidden"
          >
            Career
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hover:scale-110 m-2 border-2 rounded-full p-4 border-blackish hover:bg-greyish cursor-pointer max-sm:hidden"
          >
            About
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hover:scale-110 m-2 border-2 rounded-full p-4 border-blackish hover:bg-greyish cursor-pointer max-sm:hidden"
          >
            Security
          </motion.div>
        </div>
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-green-400 text-black font-semibold m-2 border-2 rounded-full border-blackish p-4 hover:bg-green-700 cursor-pointer hover:scale-110"
        >
          <Link to="/login">Login</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;