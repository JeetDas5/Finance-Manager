import arrow_icon from "../../assets/Icon_arrow.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full max-md:flex max-md:flex-col max-md:mt-[850px]">
      <motion.div
        className="pt-4 m-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span
          className="text-2xl font-semibold text-white"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Our &nbsp;
        </motion.span>
        <motion.span
          className="text-2xl font-semibold text-greenish"
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Features
        </motion.span>
      </motion.div>
      <motion.p
        className="text-white font-thin m-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </motion.p>

      <div className="text-white flex flex-rows w-full gap-5 max-md:flex max-md:flex-col">
        <motion.div
          className="bg-blackish w-1/5 h-72 rounded-lg flex flex-col ml-10 p-8 gap-12 max-md:flex-row max-md:gap-4 max-md:h-16 max-md:p-0 max-md:w-fit  max-md:ml-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="border-2 rounded-full w-32 h-10 p-1 hover:bg-black hover:text-greenish max-md:h-14"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Online Banking
          </motion.button>
          <motion.button
            className="border-2 rounded-full w-32 h-10 p-1 hover:bg-black hover:text-greenish max-md:h-14"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Financial Tools
          </motion.button>
          <motion.button
            className="border-2 rounded-full w-40 h-10 p-1 hover:bg-black hover:text-greenish max-md:h-14"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Customer Support
          </motion.button>
        </motion.div>
        <div
          className="w-full h-80 grid gap-5 mr-10 max-md:flex max-md:flex-col"
          style={{
            gridTemplateRows: "1fr 1fr",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <motion.div
            className="bg-blackish rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex space-x-52 p-4 m-2">
              <span>24/7 Account Access</span>
              <img src={arrow_icon} alt="" className="w-6" />
            </div>
            <p className="font-thin text-xs p-4 m-2">
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </p>
          </motion.div>
          <motion.div
            className="bg-blackish rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="flex space-x-52 p-4 m-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span>Mobile Banking App</span>
              <motion.img
                src={arrow_icon}
                alt=""
                className="w-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
            </motion.div>
            <motion.p
              className="font-thin text-xs p-4 m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-blackish rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="flex space-x-52 p-4 m-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span>Secure Transactions</span>
              <motion.img
                src={arrow_icon}
                alt=""
                className="w-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
            </motion.div>
            <motion.p
              className="font-thin text-xs p-4 m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-blackish rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="flex space-x-52 p-4 m-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span>Bill Pay and Transfers</span>
              <motion.img
                src={arrow_icon}
                alt=""
                className="w-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </motion.div>
            <motion.p
              className="font-thin text-xs p-4 m-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Save time and avoid late fees with our convenient bill pay
              service. Set up recurring payments or make one-time transfers
              between your accounts with just a few clicks
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
