"use client";
import React from "react";

export default function PrimaryButton({ onClick, children, disabled, className = "" }) {
  const base =
    "z-10 w-fit p-1 text-[10px] md:text-lg border-2 border-[#2b1d0e] hover:bg-[#2b1d0e] hover:text-[#DDC591] transition duration-[200ms]";
  const disabledExtras = disabled ? "disabled:opacity-50 disabled:cursor-wait" : "";
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${disabledExtras} ${className}`}>
      {children}
    </button>
  );
}
    