'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, Target } from 'lucide-react';

interface ToolkitCardProps {
  title: string;
  subtitle?: string;
  description: string;
  duration?: string;
  when: string;
  steps: Array<{
    title: string;
    description: string;
    details?: string[];
  }>;
}

export function ToolkitCard({ 
  title, 
  subtitle,
  description, 
  duration,
  when,
  steps 
}: ToolkitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card border-2 border-sage-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-sage-600 rounded-xl">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-sage-800 mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg text-sage-600 font-medium">{subtitle}</p>
          )}
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        {duration && (
          <div className="flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-lg">
            <Clock className="w-4 h-4 text-sage-600" />
            <span className="text-sm font-medium text-sage-700">{duration}</span>
          </div>
        )}
        <div className="flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-lg">
          <Target className="w-4 h-4 text-sage-600" />
          <span className="text-sm font-medium text-sage-700">{when}</span>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-sage-50 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-bold text-sage-800 mb-1">{step.title}</h4>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>
            
            {step.details && step.details.length > 0 && (
              <ul className="ml-11 space-y-1 mt-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-sage-600 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
