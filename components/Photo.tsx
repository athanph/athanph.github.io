"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
        <Image
          src="/assets/profile.webp"
          priority
          quality={100}
          fill
          className="object-contain pointer-events-none"
          alt="Profile Photo of Jonathan Manas"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
