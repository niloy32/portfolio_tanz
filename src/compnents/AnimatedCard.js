import React from "react";
import { motion } from "framer-motion";

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>Project Title</h2>
      <p style={{ color: "#555" }}>
        Short description of the project or content of the banner.
      </p>
    </motion.div>
  );
}

export default AnimatedCard;
