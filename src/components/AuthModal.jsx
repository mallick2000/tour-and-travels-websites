"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login"); // "login" or "signup"

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-[500px] overflow-hidden flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-600 hover:text-gray-900"
        >
          ×
        </button>

        {/* Conditional rendering */}
        {mode === "login" ? (
          <LoginForm setMode={setMode} />
        ) : (
          <SignUpForm setMode={setMode} />
        )}
      </div>
    </div>
  );
}
