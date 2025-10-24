'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Map, Compass, Sparkles, Heart, Target, Home } from 'lucide-react';

const phases = [
  {
    id: 'the-calling',
    title: 'Fase 1: O Chamado',
    description: 'Silenciamos o barulho. Não estamos começando uma dieta. Estamos atendendo a um chamado de dentro.',
    icon: Compass,
    color: 'from-sage-50 to-ocean-50',
    iconBg: 'bg-sage-600',
  },
  {
    id: 'the-awakening',
    title: 'Fase 2: O Despertar',
    description: 'Seu corpo não é seu inimigo. Vamos ouvir o que ele está dizendo.',
    icon: Sparkles,
    color: 'from-ocean-50 to-sage-50',
    iconBg: 'bg-ocean-600',
  },
  {
    id: 'the-transformation',
    title: 'Fase 3: A Transformação',
    description: 'Criando novos padrões que sustentam sua energia e bem-estar.',
    icon: Heart,
    color: 'from-sage-50 to-earth-50',
    iconBg: 'bg-earth-600',
  },
  {
    id: 'the-mastery',
    title: 'Fase 4: A Maestria',
    description: 'Refinando sua prática e construindo resiliência duradoura.',
    icon: Target,
    color: 'from-earth-50 to-sage-50',
    iconBg: 'bg-sage-700',
  },
  {
    id: 'the-return',
    title: 'Fase 5: O Retorno',
    description: 'Integrando o que aprendeu e mantendo sua renovação.',
    icon: Home,
    color: 'from-sage-50 to-ocean-50',
    iconBg: 'bg-ocean-700',
  },
];

export default function JourneyPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full mb-4">
          <Map className="w-10 h-10 text-sage-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
          A Jornada do Herói
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sua transformação acontece em cinco fases cuidadosamente desenhadas. 
          Cada fase constrói sobre a anterior, guiando você de volta ao equilíbrio.
        </p>
      </motion.div>

      {/* Phases Grid */}
      <div className="space-y-6">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/journey/${phase.id}`}>
                <div className={`card bg-gradient-to-br ${phase.color} hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                  <div className="flex items-start gap-6">
                    <div className={`${phase.iconBg} p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-sage-800 mb-2 group-hover:text-sage-900">
                        {phase.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0 text-sage-400 group-hover:text-sage-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="card bg-gradient-to-br from-sage-100 to-earth-100 text-center"
      >
        <h3 className="text-2xl font-serif font-bold text-sage-800 mb-3">
          Comece Sua Jornada
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Cada fase é uma semana de prática gentil. Não há pressa. O importante é dar o primeiro passo.
        </p>
        <Link href="/journey/the-calling" className="btn-primary">
          Começar com Fase 1: O Chamado
        </Link>
      </motion.div>
    </div>
  );
}
