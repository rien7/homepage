"use client";
import { motion } from "motion/react";
import Hello from "./Hello";

export function HomeMain() {
  return (
    <div className="flex flex-col select-none">
      <div className="font-serif text-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0, duration: 0.6 }}
        >
          <Hello />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            I'm{" "}
            <span className="font-black text-orange-400 font-mono">RieN7</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block">
            A
            <code className="bg-gray-200 dark:bg-gray-700 ml-2 px-2 text-2xl rounded-md inline-flex items-center gap-2">
              {`<Developer />`}
            </code>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
