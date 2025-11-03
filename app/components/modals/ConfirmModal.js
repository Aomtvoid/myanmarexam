"use client";
import React from "react";

export default function ConfirmModal({ open, onClose, onConfirm, message }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        <p className="text-gray-800 mb-6 text-sm">{message || "Are you sure?"}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            မလုပ်ပါ
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            လုပ်မည်
          </button>
        </div>
      </div>
    </div>
  );
}
