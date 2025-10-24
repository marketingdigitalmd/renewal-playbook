'use client';

import { motion } from 'framer-motion';
import { Anchor, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface AnchorPracticeCardProps {
  title: string;
  description: string;
  steps?: string[];
  benefit: string;
}

export function AnchorPracticeCard({ 
  title, 
  description, 
  steps,
  benefit 
}: AnchorPracticeCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card bg-gradient-to-br from-ocean-50 to-sage-50 border-2 border-ocean-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-ocean-600 rounded-lg">
            <Anchor className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-serif font-bold text-sage-800">
            {title}
          </h3>
        </div>
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`p-2 rounded-full transition-colors ${
            isCompleted 
              ? 'bg-green-100 text-green-600' 
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
          title={isCompleted ? 'Marcar como não concluído' : 'Marcar como concluído'}
        >
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {description}
      </p>

      {steps && steps.length > 0 && (
        <div className="space-y-2 mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              <p className="text-gray-700 text-sm pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-ocean-200">
        <p className="text-sm text-ocean-700 italic">
          <strong>Por que funciona:</strong> {benefit}
        </p>
      </div>
    </motion.div>
  );
}
