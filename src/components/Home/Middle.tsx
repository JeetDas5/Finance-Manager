import abstact_design_middle from "../../assets/Abstact_Desing_Middle.png";
import iconContainer1 from "../../assets/Icon Container.svg";
import iconContainer2 from "../../assets/Icon Container (1).svg";
import iconContainer3 from "../../assets/Icon Container (2).svg";
import iconContainer4 from "../../assets/Icon Container (3).svg";
import iconContainer5 from "../../assets/Icon_container_5.svg";
import iconContainer6 from "../../assets/Icon Container_6.svg";
import iconContainer7 from "../../assets/Icon Container_7.svg";
import iconContainer8 from "../../assets/Icon Container_8.svg";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <div className="text-white gap-12 max-sm:flex flex-col">
      <div className="p-4 m-10 max-sm:w-full max-sm:p-2">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-greenish"
        >
          Use Cases
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Take control of your finances with LedgerLink, the ultimate
          transaction manager app designed to streamline your finance journey
        </motion.p>
      </div>
      <div
        className="grid grid-rows-2 grid-cols-2 w-full h-[800px] rounded-lg gap-10 max-sm:flex max-sm:flex-col"
        style={{ gridTemplateRows: "1fr 1fr" }}
      >
        <div className=" rounded-lg bg-light-black ">
          <motion.img
            src={abstact_design_middle}
            alt="abstact design"
            className="absolute w-52 h-52 z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            className="absolute z-20 grid rid-rows-2 grid-cols-2 w-96 h-80 gap-4 p-4 ml-[140px] mt-8 bg-light-black rounded-md max-md:ml-8 max-md:mt-0 max-md:mr-0 max-md:h-64 max-md:w-full  max-lg:static"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="rounded-lg bg-black"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <img src={iconContainer1} alt="" className="w-14 h-14 ml-14" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-xs">Managing Personal</p>
                <p className="text-xs">Finance</p>
              </div>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img src={iconContainer2} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-6">Saving for the future</p>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <img src={iconContainer3} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-8">Home Ownership</p>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <img src={iconContainer4} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-7">Education Funding</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-semibold ml-5 mt-5 p-4">
            For Individuals
          </h1>
          <p className="text-sm font-extralight ml-10">
            Manage your personal finances effortlessly with LedgerLink. Track
            transactions, set budgets, and gain insights to make smarter
            financial choices with ease.
          </p>
          <motion.div
            className="flex space-x-8 mr-8 ml-10 mt-5 pt-4 w-max max-sm:flex-col max-sm:gap-5 max-sm:w-full max-md:items-center max-md:justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              className="w-1/3 max-sm:ml-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <h1 className="text-3xl font-bold text-greenish">78%</h1>
              <p className="text-xs font-extralight">
                Secure Retirement Planning
              </p>
            </motion.div>
            <motion.div
              className="w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-greenish">63%</h1>
              <p className="text-xs font-extralight">
                Manageable Debt Consolidation
              </p>
            </motion.div>
            <motion.div
              className="w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-greenish">91%</h1>
              <p className="text-xs font-extralight">
                Reducing Financial Burdens
              </p>
            </motion.div>
          </motion.div>
          <motion.button
            className="text-white text-xs rounded-full bg-blackish w-36 h-10 ml-12 mt-12 hover:bg-gray-700 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-semibold ml-5 mt-5 p-4">For Business</h1>
          <p className="text-sm font-extralight ml-10">
            Streamline your business finances with LedgerLink. Track, analyze,
            and manage transactions efficiently to make informed decisions and
            drive growth.
          </p>
          <motion.div
            className="flex space-x-8 mr-8 ml-10 mt-5 pt-4 w-max max-sm:flex-col max-sm:gap-5 max-sm:w-full max-md:items-center max-md:justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              className="w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <h1 className="text-3xl font-bold ml-4 text-greenish">65%</h1>
              <p className="text-xs font-extralight ml-4">
                Cash Flow Management
              </p>
            </motion.div>
            <motion.div
              className="w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-greenish">70%</h1>
              <p className="text-xs font-extralight">
                Manageable Debt Consolidation
              </p>
            </motion.div>
            <motion.div
              className="w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-greenish">45%</h1>
              <p className="text-xs font-extralight">
                Streamline Payroll Processing
              </p>
            </motion.div>
          </motion.div>
          <motion.button
            className="text-white text-xs rounded-full bg-blackish w-36 h-10 ml-12 mt-12 hover:bg-gray-700 hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="rounded-lg bg-light-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={abstact_design_middle}
            alt="abstact design"
            className="absolute w-52 h-52 z-10 right-12"
          />
          <motion.div
            className="absolute z-20 grid rid-rows-2 grid-cols-2 w-96 h-80 gap-4 p-4 ml-[140px] mt-8 bg-light-black rounded-md max-md:ml-8 max-md:mt-0 max-md:mr-0 max-md:h-64 max-md:w-full  max-lg:static"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              className="rounded-lg bg-black"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <img src={iconContainer5} alt="" className="w-14 h-14 ml-14" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-xs">Managing Personal</p>
                <p className="text-xs">Finance</p>
              </div>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <img src={iconContainer6} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-6">Saving for the future</p>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <img src={iconContainer7} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-8">Home Ownership</p>
            </motion.div>
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <img src={iconContainer8} alt="" className="w-14 h-14 ml-14" />
              <p className="text-xs ml-7">Education Funding</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Middle;
