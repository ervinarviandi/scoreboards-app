import React from "react";
import { motion } from "framer-motion";

const LoaderScreen = () => {
  return (
    <motion.section initial={{ y: 0, opacity: 1 }} animate={{ y: -1000, transition: { duration: 1, delay: 2.9 } }} className="fixed bg-[#fdf3d3] z-[2000] w-full h-full  ">
      <div className=" w-full h-full flex flex-col justify-center items-center  text-3xl font-bold leading-[0px] text-black">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Jaga Sportifitas
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Disiplin
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Menang
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4 }, transitionEnd: { display: "none" } }} className=" font-flavors">
        Semangat
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.7 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Jujur
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.0 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Selamat Bertanding
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.3 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Selamat Berjuang
        </motion.span>
        {/* <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.6 } }} className=" font-flavors">
          konnichiwa
        </motion.span> */}
        {/* <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.6 }, transitionEnd: { display: "none" } }} className=" font-flavors">
          Allinllachu
        </motion.span> */}
       
      </div>
    </motion.section>
  );
};

export default LoaderScreen;