# 🚀 Guia de Início Rápido - The Renewal Playbook

## Passo 1: Instalação (2 minutos)

```bash
cd renewal-playbook
npm install
npm run dev
```

Acesse: http://localhost:3000

## Passo 2: Estrutura Básica (Entenda em 5 minutos)

### Arquitetura
```
app/                    → Páginas (App Router do Next.js)
  ├── layout.tsx        → Layout global com Sidebar
  ├── page.tsx          → Homepage com Quiz
  ├── journey/          → 5 Fases da jornada
  ├── toolkit/          → 4 Protocolos de emergência
  └── appendix/         → 4 Adaptações personalizadas

components/             → Componentes reutilizáveis
  ├── Providers.tsx     → Context (estado global)
  ├── Sidebar.tsx       → Navegação
  ├── Quiz.tsx          → Quiz interativo
  └── [outros]          → Componentes específicos
```

### Estado Global
Use o hook `useApp()` em qualquer componente:

```typescript
import { useApp } from '@/components/Providers';

function MeuComponente() {
  const { userState, setStressArchetype, saveInsight } = useApp();
  
  // userState.stressArchetype → 'physical-exhaustion' | 'mental-overload' | 'emotional-turbulence'
  // userState.quizCompleted → boolean
  // userState.insights → Record<string, string>
}
```

## Passo 3: Adicionar Conteúdo (10 minutos)

### Adicionar Nova Fase da Jornada

1. Crie o arquivo: `app/journey/nova-fase/page.tsx`

```typescript
'use client';

import { AnchorPracticeCard } from '@/components/AnchorPracticeCard';
import { InsightPause } from '@/components/InsightPause';

export default function NovaFasePage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-serif font-bold">Minha Nova Fase</h1>
      
      <AnchorPracticeCard
        title="Prática Diária"
        description="Descrição da prática"
        steps={['Passo 1', 'Passo 2', 'Passo 3']}
        benefit="Por que funciona"
      />
      
      <InsightPause
        id="nova-fase-insight"
        question="Sua pergunta reflexiva aqui"
      />
    </div>
  );
}
```

2. Adicione à navegação em `components/Sidebar.tsx`:

```typescript
{
  title: 'Minha Nova Fase',
  href: '/journey/nova-fase',
  icon: Sparkles
}
```

### Adicionar Novo Protocolo de Toolkit

1. Crie o arquivo: `app/toolkit/novo-protocolo/page.tsx`

```typescript
'use client';

import { ToolkitCard } from '@/components/ToolkitCard';

export default function NovoProtocoloPage() {
  return (
    <ToolkitCard
      title="Meu Protocolo"
      description="Quando usar este protocolo"
      duration="10 minutos"
      when="Em situação X"
      steps={[
        {
          title: "Passo 1",
          description: "O que fazer",
          details: ["Detalhe 1", "Detalhe 2"]
        }
      ]}
    />
  );
}
```

## Passo 4: Componentes Úteis

### YouTubeSearchLink
```typescript
import { YouTubeSearchLink } from '@/components/YouTubeSearchLink';

<YouTubeSearchLink searchTerm="yoga for beginners" />
```

### Tooltip
```typescript
import { Tooltip } from '@/components/Tooltip';

<Tooltip
  title="HIIT"
  content="High-Intensity Interval Training - treino intervalado de alta intensidade"
/>
```

### InsightPause
```typescript
<InsightPause
  id="unique-id"
  question="Sua pergunta reflexiva"
  placeholder="Digite seus pensamentos..."
/>
```

## Passo 5: Customização de Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  sage: {
    600: '#627262',  // Verde principal
    // ... outros tons
  },
  earth: {
    600: '#a67f62',  // Terra/Marrom
  },
  ocean: {
    600: '#0284c7',  // Azul
  }
}
```

## Passo 6: Build e Deploy

### Build Local
```bash
npm run build
npm start
```

### Deploy na Vercel (Recomendado)
```bash
# Via Vercel CLI
npm install -g vercel
vercel

# Ou conecte seu repositório Git em vercel.com
```

## Comandos Úteis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar código
```

## Dicas Rápidas

1. **Componentes Interativos**: Use `'use client'` no topo do arquivo
2. **Animações**: Framer Motion já está instalado
3. **Ícones**: Use Lucide React (já importado)
4. **Estilos**: Tailwind CSS com classes utilitárias
5. **Responsivo**: Mobile-first, teste em vários tamanhos

## Estrutura de Uma Página Típica

```typescript
'use client';

import { motion } from 'framer-motion';
import { ComponenteX } from '@/components/ComponenteX';
import { Icon } from 'lucide-react';

export default function MinhaPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-serif font-bold text-sage-800">
          Título
        </h1>
      </motion.div>

      {/* Conteúdo */}
      <section className="card">
        <p className="text-gray-700">Seu conteúdo aqui</p>
      </section>

      {/* Componentes */}
      <ComponenteX />
    </div>
  );
}
```

## Solução de Problemas

### Erro: "use client" missing
- Adicione `'use client'` no topo de componentes interativos

### localStorage não funciona
- Certifique-se de usar `'use client'`
- Use useEffect para acessar localStorage

### Estilos não aplicados
- Verifique se o componente está importando classes do Tailwind corretamente
- Execute `npm run dev` novamente

## Próximos Passos

1. ✅ Explore a aplicação rodando
2. ✅ Leia o README.md completo
3. ✅ Adicione seu primeiro conteúdo
4. ✅ Customize cores e estilos
5. ✅ Faça deploy na Vercel

---

**Precisa de ajuda?** Consulte:
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Framer Motion](https://www.framer.com/motion/)

Bom desenvolvimento! 🌿
