import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Welcome to the New Page!</h1>
    </motion.div>
  );
};

export default PageTransition;
