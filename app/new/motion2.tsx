import React from "react";
import { motion } from "framer-motion";

const ButtonWithAnimation = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
      }}
    >
      Click Me
    </motion.button>
  );
};

export default ButtonWithAnimation;
