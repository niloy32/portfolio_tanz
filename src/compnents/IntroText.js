import React from "react";
import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <div>
      <motion.p
        style={{
          textAlign: "center",
          fontSize: "25px",
        }}
        initial={{ opacity: 0, y: 200 }} // Start with opacity at 1 and slightly lower position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and move to original position
        transition={{ duration: 2 }}
      >
        Certified Cybersecurity Analyst with 3 years of experience in
        cybersecurity and software development. Skilled in managing IT assets,
        conducting system audits, and integrating security into the software
        development lifecycle (SDLC). Proven track record of working on multiple
        web applications as a developer and security engineer, ensuring robust
        and secure solutions.
      </motion.p>
    </div>
  );
}
