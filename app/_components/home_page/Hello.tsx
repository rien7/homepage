"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  className?: string;
}

export default function Hello({ className }: Props) {
  const words = useMemo(() => {
    return [
      "Hello",
      "你好",
      "哈囉",
      "こんにちは",
      "안녕하세요",
      "Hola",
      "Bonjour",
      "Hallo",
      "Ciao",
      "Привет",
      "مرحبا",
      "สวัสดี",
      "Xin chào",
      "Olá",
      "שלום",
      "नमस्ते",
    ];
  }, []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const word = useMemo(() => {
    return words[currentWordIndex];
  }, [currentWordIndex, words]);

  const nextWord = useCallback(() => {
    setCurrentWordIndex((now) => {
      return (now + 1) % words.length;
    });
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(nextWord, 3000);
    return () => clearInterval(timer);
  }, [nextWord]);

  const variants = {
    enter: {
      opacity: 0,
      y: 8,
      filter: "blur(8px)",
    },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: -8,
      filter: "blur(8px)",
    },
  } as const;

  return (
    <span
      className={`inline-flex items-baseline ${className ?? ""}`}
      style={{ position: "relative" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentWordIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          style={{
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
