"use client";

import { motion } from "framer-motion";

import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Feedback from "@/components/Feedback";

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-14">
      <div className="container">
        <div className="flex flex-col gap-10">
          <Experience />
          <Skill />
          <Feedback />
          <Education />
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
