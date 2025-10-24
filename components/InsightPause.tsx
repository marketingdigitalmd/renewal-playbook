'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Save } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useApp } from './Providers';

interface InsightPauseProps {
  id: string;
  question: string;
  placeholder?: string;
}

export function InsightPause({ 
  id, 
  question, 
  placeholder = "Digite seus pensamentos aqui..." 
}: InsightPauseProps) {
  const { userState, saveInsight } = useApp();
  const [answer, setAnswer] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (userState.insights[id]) {
      setAnswer(userState.insights[id]);
    }
  }, [id, userState.insights]);

  const handleSave = () => {
    saveInsight(id, answer);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-amber-500 rounded-lg flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-serif font-bold text-amber-900 mb-2">
            Pausa para o Insight
          </h4>
          <p className="text-gray-700">{question}</p>
        </div>
      </div>

      <div className="space-y-3">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
        />
        
        <button
          onClick={handleSave}
          disabled={!answer.trim()}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isSaved
              ? 'bg-green-500 text-white'
              : answer.trim()
              ? 'bg-amber-500 text-white hover:bg-amber-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Save className="w-4 h-4" />
          {isSaved ? 'Salvo!' : 'Salvar Reflexão'}
        </button>
      </div>

      <p className="text-xs text-amber-700 mt-3 italic">
        Suas reflexões são salvas localmente e permanecerão privadas.
      </p>
    </motion.div>
  );
}
