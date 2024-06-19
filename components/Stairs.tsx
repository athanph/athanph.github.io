import { motion } from "framer-motion";

const animation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const steps = 6;
  return steps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="h-full w-full bg-white relative"
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(i) * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default Stairs;
