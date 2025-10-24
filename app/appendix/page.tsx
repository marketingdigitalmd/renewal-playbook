'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, DollarSign, Leaf, Baby, Plane } from 'lucide-react';

const adaptations = [
  {
    id: 'budget-friendly',
    title: 'Versão Econômica',
    description: 'Renovação acessível: como seguir o protocolo com orçamento limitado.',
    icon: DollarSign,
    color: 'from-green-50 to-emerald-50',
    iconBg: 'bg-green-600',
  },
  {
    id: 'vegetarian',
    title: 'Para Vegetarianos e Veganos',
    description: 'Adaptações completas para dietas baseadas em plantas.',
    icon: Leaf,
    color: 'from-emerald-50 to-lime-50',
    iconBg: 'bg-emerald-600',
  },
  {
    id: 'busy-moms',
    title: 'Para Mães Ocupadas',
    description: 'Versão simplificada para quem tem pouco tempo e muitas responsabilidades.',
    icon: Baby,
    color: 'from-pink-50 to-rose-50',
    iconBg: 'bg-pink-600',
  },
  {
    id: 'travelers',
    title: 'Para Viajantes Frequentes',
    description: 'Como manter sua renovação mesmo estando sempre em movimento.',
    icon: Plane,
    color: 'from-blue-50 to-sky-50',
    iconBg: 'bg-blue-600',
  },
];

export default function AppendixPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full mb-4">
          <BookOpen className="w-10 h-10 text-sage-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
          Apêndice
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Adaptações personalizadas do protocolo para diferentes circunstâncias de vida. 
          Escolha a que melhor se adequa à sua realidade.
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card bg-gradient-to-br from-sage-50 to-earth-50"
      >
        <h2 className="text-2xl font-serif font-bold text-sage-800 mb-3">
          Renovação Para Todos
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          O protocolo principal foi desenhado para ser flexível, mas entendemos que cada pessoa 
          tem circunstâncias únicas. Estas adaptações mantêm os princípios fundamentais enquanto 
          ajustam a execução para diferentes realidades.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Você pode combinar adaptações.</strong> Por exemplo, usar tanto a versão 
          econômica quanto a para mães ocupadas, se ambas se aplicarem a você.
        </p>
      </motion.div>

      {/* Adaptations Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {adaptations.map((adaptation, index) => {
          const Icon = adaptation.icon;
          return (
            <motion.div
              key={adaptation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/appendix/${adaptation.id}`}>
                <div className={`card bg-gradient-to-br ${adaptation.color} hover:shadow-xl transition-all duration-300 cursor-pointer group h-full`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${adaptation.iconBg} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-sage-800 mb-2 group-hover:text-sage-900">
                          {adaptation.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                      {adaptation.description}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-sm font-medium text-sage-600">Ver Adaptação</span>
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

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="card bg-amber-50 border-2 border-amber-200"
      >
        <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">
          Como Usar as Adaptações
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">1.</span>
            <span>
              <strong>Leia o protocolo principal primeiro:</strong> Entenda os princípios 
              fundamentais antes de adaptar.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">2.</span>
            <span>
              <strong>Escolha a(s) adaptação(ões) relevante(s):</strong> Não há problema em 
              combinar múltiplas adaptações.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">3.</span>
            <span>
              <strong>Personalize ainda mais se necessário:</strong> Use as adaptações como 
              ponto de partida, ajustando conforme sua realidade.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">4.</span>
            <span>
              <strong>Mantenha a essência:</strong> Mesmo com adaptações, preserve os rituais 
              diários e a gentileza consigo mesma.
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
