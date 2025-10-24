'use client';

import { motion } from 'framer-motion';
import { ToolkitCard } from '@/components/ToolkitCard';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HumanMomentResetPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Link 
          href="/toolkit" 
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar ao Kit de Ferramentas</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="p-4 bg-red-500 rounded-xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
              Reset do Momento Humano
            </h1>
            <p className="text-lg text-sage-600 mt-2">Protocolo de Emergência</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card bg-gradient-to-br from-red-50 to-pink-50"
      >
        <h2 className="text-2xl font-serif font-bold text-sage-800 mb-3">
          Quando Usar Este Protocolo
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Você está no meio de um dia caótico e sente que está perdendo o controle</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Sua respiração está acelerada e superficial</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Você sente uma onda de ansiedade ou pânico começando</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span>Você precisa de 5 minutos para voltar ao seu centro</span>
          </li>
        </ul>
      </motion.div>

      {/* Main Protocol */}
      <ToolkitCard
        title="O Protocolo de 5 Minutos"
        subtitle="Um reset rápido e poderoso"
        description="Este protocolo ativa seu sistema nervoso parassimpático - a parte que acalma. Você pode fazer isso em qualquer lugar: no banheiro do trabalho, no carro, em um canto tranquilo."
        duration="5 minutos"
        when="Quando sentir sobrecarga aguda"
        steps={[
          {
            title: "Encontre Seu Espaço (30 segundos)",
            description: "Afaste-se do caos. Mesmo que seja só o banheiro ou seu carro.",
            details: [
              "Feche a porta se possível",
              "Desligue notificações do celular",
              "Diga a si mesma: 'Tenho permissão para esta pausa'"
            ]
          },
          {
            title: "Respiração 4-7-8 (2 minutos)",
            description: "Esta técnica comprovadamente acalma o sistema nervoso.",
            details: [
              "Inspire pelo nariz contando até 4",
              "Segure a respiração contando até 7",
              "Expire pela boca contando até 8",
              "Repita 4 vezes"
            ]
          },
          {
            title: "Aterramento dos 5 Sentidos (2 minutos)",
            description: "Traga-se de volta ao momento presente, um sentido por vez.",
            details: [
              "5 coisas que você VÊ (nomeie-as em voz alta ou mentalmente)",
              "4 coisas que você SENTE (textura da roupa, temperatura do ar)",
              "3 coisas que você OUVE (sons distantes, sua respiração)",
              "2 coisas que você CHEIRA (perfume, ar fresco)",
              "1 coisa que você SABOREIA (ou que quer saborear em breve)"
            ]
          },
          {
            title: "Afirmação de Reset (30 segundos)",
            description: "Escolha uma frase que ressoa com você e repita 3 vezes.",
            details: [
              '"Estou segura. Este momento vai passar."',
              '"Meu corpo sabe como se acalmar."',
              '"Eu posso fazer coisas difíceis."',
              'Ou crie sua própria afirmação pessoal'
            ]
          }
        ]}
      />

      {/* Additional Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="card bg-amber-50 border-2 border-amber-200"
      >
        <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">
          Dicas para Maximizar o Reset
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">💧</span>
            <span>
              <strong>Hidrate-se:</strong> Após o reset, beba um copo de água. A desidratação 
              intensifica a ansiedade.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">🌿</span>
            <span>
              <strong>Ar fresco:</strong> Se possível, dê uma volta rápida ao ar livre ou abra 
              uma janela. Oxigênio fresco ajuda.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">📱</span>
            <span>
              <strong>Evite voltar imediatamente às telas:</strong> Dê a si mesma 2-3 minutos 
              de transição antes de voltar ao email ou redes sociais.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">📝</span>
            <span>
              <strong>Anote o gatilho:</strong> Se você conseguir identificar o que desencadeou 
              a sobrecarga, anote rapidamente. Padrões emergem com o tempo.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Science Behind It */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="card bg-sage-50"
      >
        <h3 className="text-xl font-serif font-bold text-sage-800 mb-3">
          Por Que Isso Funciona
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Quando você está em modo de luta ou fuga, seu sistema nervoso simpático está no comando. 
          Este protocolo ativa deliberadamente o sistema parassimpático - o "freio" natural do 
          seu corpo.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A respiração 4-7-8 é especialmente poderosa porque a expiração prolongada envia um sinal 
          direto ao nervo vago, que então comunica ao cérebro: "Estamos seguros. Podemos nos acalmar."
        </p>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          href="/toolkit"
          className="btn-secondary"
        >
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Voltar ao Kit
        </Link>
        
        <Link 
          href="/toolkit/sleep-rescue"
          className="btn-primary"
        >
          Próximo: Resgate do Sono
        </Link>
      </div>
    </div>
  );
}
