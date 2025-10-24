'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from './Providers';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    value: 'A' | 'B' | 'C';
    text: string;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Neste momento, minha energia parece...',
    options: [
      { value: 'A', text: 'Uma bateria a 10%. Estou fisicamente esgotada.' },
      { value: 'B', text: 'Um navegador com abas demais abertas. Estou com uma energia nervosa, mas cansada.' },
      { value: 'C', text: 'Uma montanha-russa. Tenho picos de energia, mas depois caio e me sinto irritada.' },
    ],
  },
  {
    id: 2,
    question: 'Quando penso na minha digestão, sinto...',
    options: [
      { value: 'A', text: 'Inchaço e peso. Sinto-me desconfortável após as refeições.' },
      { value: 'B', text: 'Agitação e desconforto. Meu estômago parece estar em nós, especialmente sob estresse.' },
      { value: 'C', text: 'Imprevisibilidade. Alguns dias estou bem, outros dias tudo parece irritar meu sistema.' },
    ],
  },
  {
    id: 3,
    question: 'Ultimamente, meu sono tem sido...',
    options: [
      { value: 'A', text: 'Profundo, mas ainda acordo exausta.' },
      { value: 'B', text: 'Difícil de começar. Minha mente dispara quando deito a cabeça no travesseiro.' },
      { value: 'C', text: 'Interrompido. Acordo frequentemente por volta das 2 ou 3 da manhã.' },
    ],
  },
  {
    id: 4,
    question: 'Meu maior desafio com a comida agora é...',
    options: [
      { value: 'A', text: 'Desejo por comidas pesadas e de conforto (pão, massa, doces).' },
      { value: 'B', text: 'Esquecer de comer ou não ter apetite, e depois ficar faminta.' },
      { value: 'C', text: 'Usar comida (açúcar ou vinho) para gerenciar meu humor no final do dia.' },
    ],
  },
  {
    id: 5,
    question: 'A frase que melhor descreve meu estado mental atual é...',
    options: [
      { value: 'A', text: '"Estou no limite."' },
      { value: 'B', text: '"Estou completamente sobrecarregada."' },
      { value: 'C', text: '"Estou emocionalmente à flor da pele."' },
    ],
  },
];

interface ArchetypeResult {
  type: 'physical-exhaustion' | 'mental-overload' | 'emotional-turbulence';
  title: string;
  description: string;
  mission: {
    title: string;
    description: string;
    steps: string[];
  };
}

const archetypeResults: Record<'A' | 'B' | 'C', ArchetypeResult> = {
  A: {
    type: 'physical-exhaustion',
    title: 'Exaustão Física',
    description: 'Esta é uma fadiga profunda e celular. Seu corpo não está pedindo mais cafeína ou um treino mais pesado; está pedindo descanso verdadeiro e nutrição profunda para reconstruir suas reservas de energia. É um sinal para reabastecer, não para forçar mais.',
    mission: {
      title: 'O Elixir do "Sono Profundo"',
      description: 'Seu corpo precisa mudar de "execução" para "reparo". Esta bebida quente e simples ajuda a acalmar seu sistema para um sono restaurador.',
      steps: [
        'Aqueça suavemente uma xícara de leite de amêndoa sem açúcar. Não ferva.',
        'Despeje em sua caneca favorita.',
        'Adicione 1/4 de colher de chá de canela.',
        'Beba lentamente, longe das telas, por 10 minutos antes de dormir.',
      ],
    },
  },
  B: {
    type: 'mental-overload',
    title: 'Sobrecarga Mental',
    description: 'Seu sistema nervoso está provavelmente em modo de "luta ou fuga". Seu corpo não está pedindo mais estímulo; está pedindo quietude e uma chance para a tempestade se acalmar para que ele possa finalmente expirar.',
    mission: {
      title: 'A Liberação do "Brain Dump"',
      description: 'Sua mente é como um computador com muitos programas abertos. Precisamos fechá-los para que o sistema possa reiniciar.',
      steps: [
        'Encontre um pedaço de papel e uma caneta.',
        'Ajuste um cronômetro para apenas 5 minutos.',
        'Escreva tudo o que está ocupando espaço em sua cabeça. Sua lista de tarefas, suas preocupações, aquele e-mail que você esqueceu de enviar. Apenas tire tudo da cabeça.',
        'Quando o cronômetro disparar, pare. Olhe para o papel e diga: "Isso pode esperar até amanhã."',
      ],
    },
  },
  C: {
    type: 'emotional-turbulence',
    title: 'Agitação Emocional',
    description: 'Seu sistema é provavelmente sensível aos altos e baixos de açúcar no sangue e hormônios do estresse. Seu corpo não está pedindo força de vontade; está pedindo estabilidade. Ele precisa de nutrição e rotinas gentis e consistentes para ajudá-lo a encontrar o equilíbrio novamente.',
    mission: {
      title: 'O Ritual da "Promessa para Amanhã"',
      description: 'Seu corpo anseia por estabilidade. Este simples ato de preparação é uma forma poderosa de autocuidado.',
      steps: [
        'Encontre um copo grande.',
        'Encha-o com água.',
        'Esprema o suco de meio limão.',
        'Adicione uma pequena pitada de sal marinho (ajuda na absorção de minerais).',
        'Coloque-o ao lado de sua cama. Seu primeiro ato amanhã, antes do café, será beber isso.',
      ],
    },
  },
};

export function Quiz() {
  const { setStressArchetype } = useApp();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ArchetypeResult | null>(null);

  const handleAnswer = (value: 'A' | 'B' | 'C') => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, 'A' | 'B' | 'C'>) => {
    const counts = { A: 0, B: 0, C: 0 };
    Object.values(finalAnswers).forEach(answer => counts[answer]++);
    
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as 'A' | 'B' | 'C';
    const archetypeResult = archetypeResults[dominant];
    
    setResult(archetypeResult);
    setStressArchetype(archetypeResult.type);
    setShowResult(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Result Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-sage-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-sage-800">
            Seu Sinal: {result.title}
          </h2>
        </div>

        {/* Result Description */}
        <div className="card">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-sage-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700 leading-relaxed">{result.description}</p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="card bg-gradient-to-br from-sage-50 to-earth-50">
          <h3 className="text-2xl font-serif font-bold text-sage-800 mb-2">
            Sua Primeira Vitória
          </h3>
          <h4 className="text-xl font-serif text-sage-700 mb-4">
            {result.mission.title}
          </h4>
          <p className="text-gray-700 mb-6 italic">
            {result.mission.description}
          </p>
          
          <div className="space-y-3">
            {result.mission.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-white rounded-lg"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Agora, vire a página para sua jornada completa.
          </p>
          <a 
            href="/journey/the-calling" 
            className="btn-primary inline-block"
          >
            Começar a Jornada
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-sage-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-serif font-bold text-sage-800">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  answers[currentQuestion] === option.value
                    ? 'border-sage-600 bg-sage-50'
                    : 'border-gray-200 hover:border-sage-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-sage-600 flex items-center justify-center font-bold text-sage-600">
                    {option.value}
                  </span>
                  <p className="text-gray-700 pt-1">{option.text}</p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
