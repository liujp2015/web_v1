import React from "react";
import { motion } from "framer-motion";

const FadeInExample = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "skyblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
      }}
    >
      Hello, Motion!
    </motion.div>
  );
};

export default FadeInExample;
