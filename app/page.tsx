"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeIn",
          },
        }}>
        <div className="container">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="mb-4 xl:mb-0">
              <Photo />
            </div>
            <div className="text-center xl:text-left">
              <span className="text-xl">Experienced Front-end Developer</span>
              <h1 className="heading h1 mb-6">
                Hello! I&apos;m <br />
                <span className="text-accent">Jonathan Manas</span>
              </h1>
              <p className="mb-9 text-white/80">
                I&apos;m passionate at creating appealing and intuitive user
                interfaces (UI) and user experiences (UX), and ensuring
                accessibility (a11y) across diverse user bases and platforms.
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="uppercase flex items-center gap-2">
                  <a href="./JonathanManas-Resume2024.pdf" target="_blank">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
