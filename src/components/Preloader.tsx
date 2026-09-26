import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Gold brand preloader — plays once per session, then lifts away. */
export function Preloader() {
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem("skylex-preloaded");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("skylex-preloaded", "1");
      } catch {
        /* ignore */
      }
    }, 1700);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show ]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <motion.img
            src="logo.png"
            alt=""
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h-24 w-auto md:h-28"
          />
          <div className="mt-8 h-px w-40 overflow-hidden bg-cream/15">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="h-full w-full bg-tealbright"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
