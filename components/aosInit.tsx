"use client";

import Aos from "aos";
import { Fragment, PropsWithChildren, useEffect } from "react";

export default function AOSProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out-quad", once: true });
  }, []);
  return <Fragment>{children}</Fragment>;
}
