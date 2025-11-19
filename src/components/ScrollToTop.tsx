"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Cuando se carga la página, subimos al principio
    window.scrollTo(0, 0);
  }, []);

  return null;
}