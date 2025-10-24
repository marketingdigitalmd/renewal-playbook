'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Wrench, Heart, Sparkles, Compass, Target } from 'lucide-react';

const toolkits = [
  {
    id: 'human-moment-reset',
    title: 'Reset do Momento Humano',
    description: 'Para quando você está sobrecarregada e precisa recuperar a calma rapidamente.',
    icon: Heart,
    duration: '5 minutos',
    color: 'from-red-50 to-pink-50',
    iconBg: 'bg-red-500',
  },
  {
    id: 'sleep-rescue',
    title: 'Protocolo de Resgate do Sono',
    description: 'Para noites em que seu corpo precisa de ajuda para desligar e restaurar.',
    icon: Sparkles,
    duration: '30 minutos antes de dormir',
    color: 'from-purple-50 to-indigo-50',
    iconBg: 'bg-purple-600',
  },
  {
    id: 'anti-anxiety',
    title: 'Protocolo Antiansiedade',
    description: 'Para quando sua mente não para e a ansiedade toma conta.',
    icon: Compass,
    duration: '10 minutos',
    color: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-blue-600',
  },
  {
    id: 'social-rescue',
    title: 'Estratégia de Resgate Social',
    description: 'Para navegar eventos sociais quando seu corpo pede descanso.',
    icon: Target,
    duration: 'Conforme necessário',
    color: 'from-green-50 to-emerald-50',
    iconBg: 'bg-green-600',
  },
];

export default function ToolkitPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full mb-4">
          <Wrench className="w-10 h-10 text-sage-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
          Kit de Ferramentas
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Protocolos de emergência para momentos em que você precisa de suporte imediato. 
          Pense neles como primeiros socorros para seu bem-estar.
        </p>
      </motion.div>

      {/* Introduction Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200"
      >
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-3">
          Quando Usar o Kit de Ferramentas
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A vida acontece. Mesmo com os melhores planos, haverá momentos de crise, estresse 
          inesperado ou situações que testam seu equilíbrio. Estes protocolos são sua rede de 
          segurança.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Importante:</strong> Estes não substituem sua jornada principal. São ferramentas 
          complementares para momentos específicos de necessidade.
        </p>
      </motion.div>

      {/* Toolkits Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {toolkits.map((toolkit, index) => {
          const Icon = toolkit.icon;
          return (
            <motion.div
              key={toolkit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/toolkit/${toolkit.id}`}>
                <div className={`card bg-gradient-to-br ${toolkit.color} hover:shadow-xl transition-all duration-300 cursor-pointer group h-full`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${toolkit.iconBg} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-sage-800 mb-2 group-hover:text-sage-900">
                          {toolkit.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600">
                          {toolkit.duration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {toolkit.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-sm font-medium text-sage-600">Ver Protocolo</span>
                      <div className="text-sage-400 group-hover:text-sage-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="card bg-sage-50"
      >
        <p className="text-gray-700 leading-relaxed text-center">
          💡 <strong>Dica:</strong> Marque esta página nos favoritos do seu navegador. 
          Você nunca sabe quando precisará acessar rapidamente um destes protocolos.
        </p>
      </motion.div>
    </div>
  );
}
