'use client';

import { motion } from 'framer-motion';
import { AnchorPracticeCard } from '@/components/AnchorPracticeCard';
import { InsightPause } from '@/components/InsightPause';
import { Tooltip } from '@/components/Tooltip';
import { YouTubeSearchLink } from '@/components/YouTubeSearchLink';
import { Compass, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TheCallingPage() {
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
          <div className="p-4 bg-sage-600 rounded-xl">
            <Compass className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
              Fase 1: O Chamado
            </h1>
            <p className="text-lg text-sage-600 mt-2">Semana 1</p>
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
          Você passou anos ouvindo o barulho lá fora. Esta semana, silenciamos o barulho. 
          Não estamos começando uma dieta. Estamos atendendo a um chamado de dentro - um 
          chamado por calma e nutrição.
        </blockquote>
      </motion.div>

      {/* Anchor Practice */}
      <AnchorPracticeCard
        title="O Ritual do Elixir Matinal"
        description="Todas as manhãs, antes do café, beba o copo de água com limão que você preparou na noite anterior."
        steps={[
          'Encha um copo grande com água',
          'Esprema o suco de meio limão',
          'Adicione uma pequena pitada de sal marinho',
          'Coloque ao lado da cama',
          'Ao acordar, beba antes de qualquer outra coisa'
        ]}
        benefit="Re-hidrata seu sistema, apoia a digestão e fornece minerais essenciais, despertando seu metabolismo suavemente."
      />

      {/* Content Sections */}
      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            O Modelo do "Prato da Paz"
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Este não é um plano de dieta rígido. É um modelo gentil que traz clareza à confusão 
            sobre alimentação. Cada refeição segue esta estrutura simples:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-sage-50 rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">½ Prato</h3>
              <p className="text-sm text-gray-700">
                <strong>Vegetais Coloridos</strong><br />
                Folhas verdes, brócolis, cenouras, pimentões, abóbora
              </p>
            </div>
            <div className="p-4 bg-ocean-50 rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">¼ Prato</h3>
              <p className="text-sm text-gray-700">
                <strong>Proteína Limpa</strong><br />
                Frango, peixe, ovos, feijão, lentilhas, tofu
              </p>
            </div>
            <div className="p-4 bg-earth-50 rounded-lg">
              <h3 className="font-bold text-sage-800 mb-2">¼ Prato</h3>
              <p className="text-sm text-gray-700">
                <strong>Gorduras Saudáveis & Carboidratos Inteligentes</strong><br />
                Abacate, azeite, batata-doce, arroz integral, quinoa
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <p className="text-sm text-amber-900">
              <strong>Nota:</strong> Este modelo não é sobre perfeição. É sobre encontrar um 
              padrão que acalma seu sistema e fornece nutrição consistente.
            </p>
          </div>
        </section>

        {/* Sample Day */}
        <section className="card bg-gradient-to-br from-sage-50 to-ocean-50">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Seu Guia de 3 Dias para uma Alimentação Calma
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-sage-700 mb-3">Dia 1</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-sage-800 mb-2">Café da Manhã</h4>
                  <p className="text-gray-700 mb-2">
                    Ovos mexidos com espinafre e abacate + uma pequena porção de frutas vermelhas
                  </p>
                  <YouTubeSearchLink searchTerm="scrambled eggs with spinach recipe" />
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-sage-800 mb-2">Almoço</h4>
                  <p className="text-gray-700 mb-2">
                    Salada grande com frango grelhado, vegetais variados, grão-de-bico e azeite
                  </p>
                  <YouTubeSearchLink searchTerm="healthy grilled chicken salad" />
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-sage-800 mb-2">Jantar</h4>
                  <p className="text-gray-700 mb-2">
                    Salmão assado com brócolis no vapor e batata-doce
                  </p>
                  <YouTubeSearchLink searchTerm="baked salmon with vegetables" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-bold text-sage-800 mb-2 flex items-center gap-2">
                O que é {' '}
                <Tooltip
                  title="Proteína Limpa"
                  content="Proteína limpa refere-se a fontes de proteína que são minimamente processadas e livres de aditivos artificiais. Inclui carnes magras de animais criados de forma sustentável, peixes selvagens ou de aquicultura responsável, ovos orgânicos, e proteínas vegetais como leguminosas e tofu."
                />
                ?
              </h4>
            </div>
          </div>
        </section>

        {/* Movement */}
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Movimento Gentil: A Caminhada da Paz
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Esta semana, não estamos falando de treinos intensos. Estamos falando de movimento 
            que acalma seu sistema nervoso.
          </p>
          
          <div className="p-4 bg-sage-50 rounded-lg mb-4">
            <h3 className="font-bold text-sage-800 mb-2">A Prática:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-sage-600 mt-1">•</span>
                <span>20 minutos de caminhada em ritmo confortável</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-600 mt-1">•</span>
                <span>Respire profundamente pelo nariz</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-600 mt-1">•</span>
                <span>Observe a natureza ao seu redor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage-600 mt-1">•</span>
                <span>Deixe sua mente vagar sem julgamento</span>
              </li>
            </ul>
          </div>

          <YouTubeSearchLink searchTerm="benefits of walking for stress relief" />
        </section>
      </div>

      {/* Insight Pause */}
      <InsightPause
        id="calling-week1-insight"
        question="Ao final desta primeira semana, o que você nota sobre seus níveis de energia? Como seu corpo está respondendo a esses pequenos rituais?"
        placeholder="Ex: Percebi que acordar mais hidratada me dá mais clareza pela manhã..."
      />

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          href="/journey"
          className="btn-secondary"
        >
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Visão Geral da Jornada
        </Link>
        
        <Link 
          href="/journey/the-awakening"
          className="btn-primary"
        >
          Próxima Fase: O Despertar
          <ArrowRight className="w-4 h-4 inline ml-2" />
        </Link>
      </div>
    </div>
  );
}
