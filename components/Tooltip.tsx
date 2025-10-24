'use client';

import { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  title: string;
  content: string;
  trigger?: 'hover' | 'click';
}

export function Tooltip({ title, content, trigger = 'click' }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, trigger]);

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <div className="inline-block relative" ref={tooltipRef}>
      <button
        onClick={handleInteraction}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-flex items-center gap-1 px-2 py-1 text-sage-600 hover:text-sage-800 hover:bg-sage-50 rounded-md transition-colors group"
        aria-label={`Mais informações sobre: ${title}`}
      >
        <Info className="w-4 h-4" />
        <span className="text-sm font-medium underline decoration-dotted underline-offset-2">
          {title}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-80 max-w-[calc(100vw-2rem)] mt-2 left-0 sm:left-auto sm:right-0"
          >
            <div className="bg-white rounded-xl shadow-xl border-2 border-sage-200 p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-bold text-sage-800 flex-1">
                  {title}
                </h4>
                {trigger === 'click' && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-shrink-0 p-1 hover:bg-sage-100 rounded transition-colors"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {content}
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l-2 border-t-2 border-sage-200 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
