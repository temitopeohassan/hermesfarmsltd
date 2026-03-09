import React from "react";
import { motion } from "framer-motion";

export default function PageBanner({ title }) {
  return (
    <div className="page-header page-header--themed">
      <div className="container">
        <motion.div
          className="page-header-box"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
          )}
        </motion.div>
      </div>
    </div>
  );
}
