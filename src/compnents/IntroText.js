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
        Final-semester CyberSecurity and Computer Forensics student at Lambton
        College, equipped with nearly two years of hands-on software development
        experience specializing in mobile and web-based applications.
        Transitioning into the cybersecurity field, background has been
        supplemented with extensive practical knowledge gained through industry
        experience and achievement of key Cybersecurity certifications.
      </motion.p>
    </div>
  );
}
