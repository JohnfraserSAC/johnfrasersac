"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ReactElement, ReactNode, ComponentType } from "react";

function MyApp({ Component, pageProps }: { Component: ComponentType<any>, pageProps: any }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;