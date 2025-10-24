# 💻 Exemplos de Código - The Renewal Playbook

Guia prático com exemplos prontos para copiar e adaptar.

---

## 📄 Template de Nova Página da Jornada

```typescript
'use client';

import { motion } from 'framer-motion';
import { AnchorPracticeCard } from '@/components/AnchorPracticeCard';
import { InsightPause } from '@/components/InsightPause';
import { Tooltip } from '@/components/Tooltip';
import { YouTubeSearchLink } from '@/components/YouTubeSearchLink';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NovaFasePage() {
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
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
              Fase X: Nome da Fase
            </h1>
            <p className="text-lg text-sage-600 mt-2">Semana X</p>
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
          Citação inspiradora ou introdução da fase aqui.
        </blockquote>
      </motion.div>

      {/* Anchor Practice */}
      <AnchorPracticeCard
        title="Nome da Prática-Âncora"
        description="Descrição do que fazer diariamente nesta fase."
        steps={[
          'Passo 1 da prática',
          'Passo 2 da prática',
          'Passo 3 da prática',
        ]}
        benefit="Explicação do benefício e por que funciona."
      />

      {/* Content Section */}
      <section className="card">
        <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
          Seção de Conteúdo
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Seu conteúdo aqui. Você pode usar{' '}
          <Tooltip
            title="Conceito"
            content="Explicação detalhada do conceito aqui."
          />
          {' '}para adicionar explicações interativas.
        </p>
        
        <YouTubeSearchLink searchTerm="termo de busca relevante" />
      </section>

      {/* Insight Pause */}
      <InsightPause
        id="fase-x-insight"
        question="Pergunta reflexiva para o usuário?"
        placeholder="Digite seus pensamentos aqui..."
      />

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          href="/journey/fase-anterior"
          className="btn-secondary"
        >
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Fase Anterior
        </Link>
        
        <Link 
          href="/journey/proxima-fase"
          className="btn-primary"
        >
          Próxima Fase
          <ArrowRight className="w-4 h-4 inline ml-2" />
        </Link>
      </div>
    </div>
  );
}
```

---

## 🛠️ Template de Novo Protocolo de Toolkit

```typescript
'use client';

import { motion } from 'framer-motion';
import { ToolkitCard } from '@/components/ToolkitCard';
import { Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NovoProtocoloPage() {
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
          <div className="p-4 bg-purple-600 rounded-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800">
              Nome do Protocolo
            </h1>
            <p className="text-lg text-sage-600 mt-2">Protocolo de Emergência</p>
          </div>
        </div>
      </motion.div>

      {/* When to Use */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <h2 className="text-2xl font-serif font-bold text-sage-800 mb-3">
          Quando Usar Este Protocolo
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Situação 1</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Situação 2</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Situação 3</span>
          </li>
        </ul>
      </motion.div>

      {/* Main Protocol */}
      <ToolkitCard
        title="O Protocolo"
        subtitle="Subtítulo opcional"
        description="Descrição geral do protocolo e como ele ajuda."
        duration="10 minutos"
        when="Quando sentir X"
        steps={[
          {
            title: "Passo 1: Título",
            description: "Descrição do que fazer neste passo.",
            details: [
              "Detalhe específico 1",
              "Detalhe específico 2",
              "Detalhe específico 3"
            ]
          },
          {
            title: "Passo 2: Título",
            description: "Descrição do que fazer neste passo.",
            details: [
              "Detalhe específico 1",
              "Detalhe específico 2"
            ]
          },
          {
            title: "Passo 3: Título",
            description: "Descrição do que fazer neste passo."
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
          Dicas para Maximizar o Protocolo
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">💡</span>
            <span><strong>Dica 1:</strong> Explicação</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-600 mt-1">💡</span>
            <span><strong>Dica 2:</strong> Explicação</span>
          </p>
        </div>
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
          href="/toolkit/proximo-protocolo"
          className="btn-primary"
        >
          Próximo Protocolo
        </Link>
      </div>
    </div>
  );
}
```

---

## 🎨 Componentes de Estilo Prontos

### Card Básico
```typescript
<div className="card">
  <h3 className="text-xl font-serif font-bold text-sage-800 mb-3">
    Título
  </h3>
  <p className="text-gray-700">Conteúdo</p>
</div>
```

### Card com Gradiente
```typescript
<div className="card bg-gradient-to-br from-sage-50 to-ocean-50">
  {/* Conteúdo */}
</div>
```

### Blockquote Destacado
```typescript
<blockquote className="text-lg border-l-4 border-sage-400 pl-4 italic text-sage-700">
  Citação importante aqui.
</blockquote>
```

### Seção com Ícone
```typescript
<div className="flex items-start gap-4">
  <div className="p-3 bg-sage-600 rounded-xl">
    <Heart className="w-6 h-6 text-white" />
  </div>
  <div className="flex-1">
    <h3 className="font-bold text-sage-800 mb-2">Título</h3>
    <p className="text-gray-700">Texto</p>
  </div>
</div>
```

### Grid de Cards
```typescript
<div className="grid md:grid-cols-2 gap-4">
  <div className="p-4 bg-sage-50 rounded-lg">
    <h4 className="font-bold mb-2">Card 1</h4>
    <p className="text-sm">Conteúdo</p>
  </div>
  <div className="p-4 bg-ocean-50 rounded-lg">
    <h4 className="font-bold mb-2">Card 2</h4>
    <p className="text-sm">Conteúdo</p>
  </div>
</div>
```

### Lista Estilizada
```typescript
<ul className="space-y-2">
  <li className="flex items-start gap-2">
    <span className="text-sage-600 mt-1">•</span>
    <span>Item da lista</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-sage-600 mt-1">•</span>
    <span>Item da lista</span>
  </li>
</ul>
```

### Call-to-Action Box
```typescript
<div className="card bg-gradient-to-br from-sage-100 to-earth-100 text-center">
  <h3 className="text-2xl font-serif font-bold text-sage-800 mb-3">
    Título do CTA
  </h3>
  <p className="text-gray-700 mb-6">Descrição</p>
  <Link href="/destino" className="btn-primary">
    Texto do Botão
  </Link>
</div>
```

---

## 🎭 Animações com Framer Motion

### Fade In Básico
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### Slide Up
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### Animação com Delay
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### Animação ao Entrar na Viewport
```typescript
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

---

## 🔗 Ícones Lucide React Úteis

```typescript
import { 
  Heart,        // Coração
  Sparkles,     // Estrelinhas
  Compass,      // Bússola
  Target,       // Alvo
  Map,          // Mapa
  Anchor,       // Âncora
  Lightbulb,    // Lâmpada (insights)
  Info,         // Informação
  CheckCircle2, // Check
  Clock,        // Relógio
  ArrowLeft,    // Seta esquerda
  ArrowRight,   // Seta direita
  Home,         // Casa
  Book,         // Livro
  Wrench,       // Ferramenta
  Leaf,         // Folha
  Baby,         // Bebê
  Plane,        // Avião
  DollarSign,   // Cifrão
  Youtube,      // YouTube
} from 'lucide-react';
```

---

## 🎨 Paleta de Cores

```typescript
// Verde Sage (Principal)
bg-sage-50    text-sage-50
bg-sage-600   text-sage-600
bg-sage-800   text-sage-800

// Terra (Secundário)
bg-earth-50   text-earth-50
bg-earth-600  text-earth-600

// Ocean (Accent)
bg-ocean-50   text-ocean-50
bg-ocean-600  text-ocean-600

// Utilitárias
bg-amber-50   (avisos/dicas)
bg-red-50     (urgência)
bg-green-50   (sucesso)
```

---

## 🔌 Uso do Hook useApp

```typescript
import { useApp } from '@/components/Providers';

function MeuComponente() {
  const { 
    userState,           // Estado atual
    setStressArchetype,  // Define arquétipo
    saveInsight,         // Salva reflexão
    resetUserState       // Reseta tudo
  } = useApp();

  // Verificar quiz completado
  if (userState.quizCompleted) {
    // Fazer algo
  }

  // Ver arquétipo
  const arquetipo = userState.stressArchetype;
  // 'physical-exhaustion' | 'mental-overload' | 'emotional-turbulence' | null

  // Salvar reflexão
  const handleSave = () => {
    saveInsight('minha-chave-unica', 'Minha reflexão aqui');
  };

  // Acessar reflexão salva
  const reflexao = userState.insights['minha-chave-unica'];
}
```

---

## 💡 Dicas de Desenvolvimento

1. **Use o VSCode**: Melhor experiência com TypeScript
2. **Instale a extensão Tailwind CSS IntelliSense**: Autocomplete de classes
3. **Use o React DevTools**: Para debugar componentes
4. **Mantenha consistência**: Siga os padrões dos exemplos
5. **Teste responsividade**: Use DevTools mobile view

---

**Templates prontos para copiar, colar e adaptar!** 🚀
