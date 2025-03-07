import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { MorphingText } from "../magicui/morphing-text";
import { TypeAnimation } from 'react-type-animation';


const texts = [
  "Hello! My name is ",
  "你好,我係",
  "こんにちは、私の名前は",
  "Bonjour, je m'appelle ",
  "Hola, mi nombre es ",
  "สวัสดี ฉันชื่อ",
  "Hallo, mein Name ist ",
  "Привет, меня зовут ",
];
const sequence=["I am a Teaching Assistant.","I am a Software Developer.","I am a Body Builder"];
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <p className={`${styles.heroHeadText} text-white`}>
          <MorphingText className='text-left text-white text-[27px] font-bold cursor-pointer flex' texts={texts} /><span className='text-[#915EFF]'>Wing</span> 
          </p>
          <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          With a keen eye for detail, strong communication skills<br className='sm:block hidden' /> passion for both technology and fitness
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};



export default Hero;
