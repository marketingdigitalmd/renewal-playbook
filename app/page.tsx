'use client';

import { Quiz } from '@/components/Quiz';
import { useApp } from '@/components/Providers';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function HomePage() {
  const { userState, resetUserState } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full mb-4">
          <Sparkles className="w-10 h-10 text-sage-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
          Bem-vinda ao<br />The Renewal Playbook
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Um protocolo compassivo para recuperar sua energia,<br />
          clareza mental e equilíbrio emocional.
        </p>
      </motion.div>

      {/* Intro Section */}
      {!userState.quizCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="card bg-gradient-to-br from-sage-50 to-earth-50 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Your 3-Minute Compass
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Você passou anos ouvindo o barulho lá fora. Vamos descobrir o que seu corpo está 
            pedindo <em>agora mesmo</em>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Responda a estas perguntas. Não há respostas certas ou erradas. Apenas escolha o 
            que parece mais verdadeiro para você hoje.
          </p>
        </motion.div>
      )}

      {/* Quiz Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Quiz />
      </motion.div>

      {/* Reset Button - Only show if quiz is completed */}
      {userState.quizCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center pt-8"
        >
          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja refazer o quiz? Suas reflexões salvas serão mantidas.')) {
                resetUserState();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sage-600 hover:text-sage-800 hover:bg-sage-50 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-medium">Refazer o Quiz</span>
          </button>
        </motion.div>
      )}

      {/* Bottom CTA */}
      {!userState.quizCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center pt-8 pb-12"
        >
          <p className="text-gray-500 text-sm">
            Este quiz leva apenas 3 minutos e ajudará a personalizar sua jornada.
          </p>
        </motion.div>
      )}
    </div>
  );
}
