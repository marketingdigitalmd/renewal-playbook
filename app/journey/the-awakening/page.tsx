'use client';

import { motion } from 'framer-motion';
import { AnchorPracticeCard } from '@/components/AnchorPracticeCard';
import { InsightPause } from '@/components/InsightPause';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TheAwakeningPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Link 
          href="/journey" 
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar à Jornada</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="p-4 bg-ocean-600 rounded-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
              Fase 2: O Despertar
            </h1>
            <p className="text-lg text-sage-600 mt-2">Semana 2</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose-custom"
      >
        <blockquote className="text-lg">
          Seu corpo não é seu inimigo. Esta semana, vamos ouvir o que ele está dizendo - 
          realmente ouvir, sem julgamento ou crítica.
        </blockquote>
      </motion.div>

      {/* Anchor Practice */}
      <AnchorPracticeCard
        title="O Check-in do Meio-Dia"
        description="Todos os dias, ao meio-dia, faça uma pausa de 3 minutos para se conectar com seu corpo."
        steps={[
          'Encontre um lugar tranquilo',
          'Feche os olhos e respire profundamente 3 vezes',
          'Escaneie seu corpo da cabeça aos pés',
          'Pergunte: O que meu corpo precisa agora?',
          'Honre o que ouvir - mesmo que seja apenas um copo de água'
        ]}
        benefit="Desenvolve consciência corporal e previne a exaustão ao longo do dia."
      />

      {/* Content Sections */}
      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Aprendendo a Linguagem do Seu Corpo
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Seu corpo está constantemente se comunicando com você através de sinais sutis. 
            Esta semana, vamos aprender a decodificar esses sinais.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-ocean-50 rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">Sinais de Energia Baixa:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Desejos por açúcar ou cafeína</li>
                <li>• Dificuldade de concentração</li>
                <li>• Irritabilidade sem causa aparente</li>
                <li>• Necessidade de "arrastar-se" pelo dia</li>
              </ul>
            </div>
            
            <div className="p-4 bg-sage-50 rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">O Que Seu Corpo Realmente Precisa:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hidratação adequada</li>
                <li>• Proteína de qualidade</li>
                <li>• Movimento gentil</li>
                <li>• Descanso verdadeiro (não só sono)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card bg-gradient-to-br from-ocean-50 to-sage-50">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Práticas de Conexão Corpo-Mente
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Esta semana introduz práticas suaves que ajudam você a reconectar-se com as sensações 
            do seu corpo, sem julgamento.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">Yoga Restaurativa (10 minutos)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Posturas gentis que acalmam o sistema nervoso e liberam tensão acumulada.
              </p>
              <p className="text-xs text-gray-600 italic">
                Experimente: Postura da Criança, Pernas na Parede, Torção Suave
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">Body Scan de 5 Minutos</h3>
              <p className="text-gray-700 text-sm mb-2">
                Uma prática de mindfulness que aumenta a consciência corporal.
              </p>
              <p className="text-xs text-gray-600 italic">
                Faça antes de dormir para melhor qualidade de sono
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Insight Pause */}
      <InsightPause
        id="awakening-week2-insight"
        question="O que você descobriu esta semana sobre as necessidades do seu corpo? Houve algum padrão ou sinal que você nunca havia notado antes?"
        placeholder="Ex: Percebi que minha energia cai sempre por volta das 15h, e um lanche com proteína ajuda muito mais do que café..."
      />

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          href="/journey/the-calling"
          className="btn-secondary"
        >
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Fase Anterior
        </Link>
        
        <Link 
          href="/journey/the-transformation"
          className="btn-primary"
        >
          Próxima Fase: A Transformação
          <ArrowRight className="w-4 h-4 inline ml-2" />
        </Link>
      </div>
    </div>
  );
}
