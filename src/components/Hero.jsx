import { motion } from "framer-motion";

import styles from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
         flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Nikos</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software engineer focused on building reliable,
            <br className="sm:block hidden" /> scalable web applications
            end-to-end, from C#/.NET backends to modern React frontends and
            cloud-ready infrastructure
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-50">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 bg-black/40">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
