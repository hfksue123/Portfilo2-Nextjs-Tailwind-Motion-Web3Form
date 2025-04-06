import { motion } from "framer-motion";

export default function AnimationSamples() {
  return (
    <div className="space-y-8">
      {/* 🚶 Fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl"
      >
        Fade In
      </motion.div>

      {/* 🕳 Fade out */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-xl"
      >
        Fade Out
      </motion.div>

      {/* 🔽 Fade in from top */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl"
      >
        Fade Down
      </motion.div>

      {/* 🔼 Fade in from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl"
      >
        Fade Up
      </motion.div>

      {/* ⬅️ Left to right */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-xl"
      >
        Left to Right
      </motion.div>

      {/* ➡️ Right to left */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-xl"
      >
        Right to Left
      </motion.div>

      {/* 🔍 Scale up */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xl"
      >
        Scale In
      </motion.div>

      {/* 💫 Rotate + Fade */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-xl"
      >
        Rotate & Fade
      </motion.div>

      {/* 🌀 Spring bounce in */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="text-xl"
      >
        Spring Bounce
      </motion.div>

      {/* 🔁 Flip in (rotate Y axis) */}
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl"
      >
        Flip In Y
      </motion.div>
    </div>
  );
}
