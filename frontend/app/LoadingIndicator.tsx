// "use client";

// import { useEffect, useState } from "react";

// import { usePathname } from "next/navigation";

// import { AnimatePresence, motion } from "framer-motion";

// export function LoadingIndicator() {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => setLoading(false), 700); // simula carregamento

//     return () => clearTimeout(timeout);
//   }, [pathname]);

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[9999]"
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         />
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { useGlobalLoading } from "@/contexts/loading-context";

import { AnimatePresence, motion } from "framer-motion";

export function LoadingIndicator() {
  const { loading } = useGlobalLoading();

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
