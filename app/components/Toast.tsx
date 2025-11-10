'use client';

import { useEffect } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-slide-down">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${
        type === 'success' 
          ? 'bg-[#39BA9F] text-white' 
          : 'bg-red-500 text-white'
      }`}>
        {type === 'success' ? (
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
        )}
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="mr-2 hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
