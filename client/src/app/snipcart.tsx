"use client";
import React, { useEffect } from "react";

export default function SnipCartCustom({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    document.addEventListener("snipcart.ready", (e) => {
      const snipcartReadyEvent = e as CustomEvent;
      const Snipcart = snipcartReadyEvent.detail.sdk;
  
      Snipcart.api.theme.customization.registerPaymentFormCustomization({
        input: {
          color: "white"
        },
        label: {
          color: "white"
        }
      });
    });
  }, []);
  
  return (
    <>
      {children}
    </>
  );
}