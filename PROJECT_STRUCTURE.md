# 📁 Estrutura do Projeto - The Renewal Playbook

```
renewal-playbook/
│
├── 📄 package.json                 # Dependências e scripts NPM
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 tailwind.config.ts           # Configuração Tailwind CSS
├── 📄 postcss.config.js            # Configuração PostCSS
├── 📄 next.config.js               # Configuração Next.js
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
├── 📄 README.md                    # Documentação principal ⭐
├── 📄 QUICKSTART.md                # Guia de início rápido ⭐
├── 📄 PROJECT_OVERVIEW.md          # Overview do projeto ⭐
├── 🔧 setup.sh                     # Script de instalação automática
│
├── 📁 app/                         # Páginas (Next.js App Router)
│   │
│   ├── 📄 layout.tsx               # Layout global com Sidebar
│   ├── 📄 page.tsx                 # Homepage com Quiz ✅
│   ├── 📄 globals.css              # Estilos globais
│   │
│   ├── 📁 journey/                 # Jornada do Herói (5 Fases)
│   │   ├── 📄 page.tsx             # Overview da jornada ✅
│   │   ├── 📁 the-calling/         # Fase 1 ✅
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 the-awakening/       # Fase 2 ✅
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 the-transformation/  # Fase 3 (para completar)
│   │   ├── 📁 the-mastery/         # Fase 4 (para completar)
│   │   └── 📁 the-return/          # Fase 5 (para completar)
│   │
│   ├── 📁 toolkit/                 # Kit de Ferramentas (4 Protocolos)
│   │   ├── 📄 page.tsx             # Overview do toolkit ✅
│   │   ├── 📁 human-moment-reset/  # Protocolo 1 ✅
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 sleep-rescue/        # Protocolo 2 (para completar)
│   │   ├── 📁 anti-anxiety/        # Protocolo 3 (para completar)
│   │   └── 📁 social-rescue/       # Protocolo 4 (para completar)
│   │
│   └── 📁 appendix/                # Apêndice (4 Adaptações)
│       ├── 📄 page.tsx             # Overview do apêndice ✅
│       ├── 📁 budget-friendly/     # Adaptação 1 (para completar)
│       ├── 📁 vegetarian/          # Adaptação 2 (para completar)
│       ├── 📁 busy-moms/           # Adaptação 3 (para completar)
│       └── 📁 travelers/           # Adaptação 4 (para completar)
│
└── 📁 components/                  # Componentes Reutilizáveis
    │
    ├── 📄 Providers.tsx            # Context Provider (estado global) ⭐
    ├── 📄 Sidebar.tsx              # Navegação lateral ⭐
    ├── 📄 Quiz.tsx                 # Quiz interativo completo ⭐
    ├── 📄 AnchorPracticeCard.tsx   # Card de práticas-âncora ⭐
    ├── 📄 InsightPause.tsx         # Pausas reflexivas ⭐
    ├── 📄 ToolkitCard.tsx          # Card de protocolos ⭐
    ├── 📄 Tooltip.tsx              # Tooltips explicativos ⭐
    └── 📄 YouTubeSearchLink.tsx    # Links de busca YouTube ⭐
```

---

## 📊 Status de Implementação

### ✅ Completamente Implementado

**Infraestrutura:**
- ✅ Configuração completa do projeto
- ✅ Sistema de roteamento (Next.js App Router)
- ✅ Sistema de estado global (Context + localStorage)
- ✅ Layout responsivo com Sidebar
- ✅ Estilos globais com Tailwind CSS

**Componentes:**
- ✅ Providers (gerenciamento de estado)
- ✅ Sidebar (navegação responsiva)
- ✅ Quiz (5 perguntas, cálculo de arquétipo, resultados)
- ✅ AnchorPracticeCard (práticas diárias)
- ✅ InsightPause (reflexões com salvamento)
- ✅ ToolkitCard (protocolos detalhados)
- ✅ Tooltip (explicações interativas)
- ✅ YouTubeSearchLink (busca automática)

**Páginas:**
- ✅ Homepage com quiz completo
- ✅ Journey overview + 2 fases exemplo
- ✅ Toolkit overview + 1 protocolo exemplo
- ✅ Appendix overview

### 🚧 Para Completar (seguir padrão existente)

**Jornada do Herói:**
- 🚧 Fase 3: The Transformation
- 🚧 Fase 4: The Mastery
- 🚧 Fase 5: The Return

**Toolkit:**
- 🚧 Sleep Rescue
- 🚧 Anti-Anxiety
- 🚧 Social Rescue

**Apêndice:**
- 🚧 Budget-Friendly
- 🚧 Vegetarian
- 🚧 Busy Moms
- 🚧 Travelers

---

## 🎯 Guia de Arquivos-Chave

### Para Começar a Desenvolver
1. **QUICKSTART.md** - Leia primeiro! Guia de 5 minutos
2. **README.md** - Documentação completa
3. **PROJECT_OVERVIEW.md** - Overview do que foi criado

### Para Adicionar Conteúdo
1. **app/journey/the-calling/page.tsx** - Exemplo de fase da jornada
2. **app/toolkit/human-moment-reset/page.tsx** - Exemplo de protocolo
3. **components/** - Todos os componentes reutilizáveis

### Para Customizar
1. **tailwind.config.ts** - Cores, fontes, animações
2. **app/globals.css** - Estilos globais customizados
3. **components/Sidebar.tsx** - Estrutura de navegação

### Para Entender o Estado
1. **components/Providers.tsx** - Sistema de estado global
2. Usa localStorage para persistência
3. Hook `useApp()` em qualquer componente

---

## 🔑 Conceitos-Chave

### Roteamento
- Baseado em pastas: `app/journey/the-calling/page.tsx` = `/journey/the-calling`
- Rotas dinâmicas suportadas
- Navegação via `<Link>` do Next.js

### Estado Global
```typescript
const { userState, setStressArchetype, saveInsight } = useApp();

// userState contém:
// - stressArchetype: resultado do quiz
// - quizCompleted: boolean
// - insights: reflexões salvas
```

### Componentes
- Use `'use client'` para interatividade
- Framer Motion para animações
- Tailwind para estilos
- TypeScript para tipagem

### Design System
- Cores: sage (verde), earth (terra), ocean (azul)
- Tipografia: Inter (sans) + Merriweather (serif)
- Componentes: `.card`, `.btn-primary`, `.btn-secondary`
- Animações: suaves e compassivas

---

## 📈 Próximos Passos

1. **Imediato**: Execute `npm install` e `npm run dev`
2. **Exploração**: Navegue pelo app em http://localhost:3000
3. **Desenvolvimento**: Adicione conteúdo seguindo os exemplos
4. **Deploy**: Use Vercel para produção

---

## 💡 Dicas

- Cada página segue um padrão consistente - replique-o
- Componentes são altamente reutilizáveis
- Estado persiste automaticamente no localStorage
- Design é mobile-first por padrão
- Documentação inline no código para guiá-lo

---

**Estrutura criada com atenção aos detalhes e pronta para expansão!** 🌿
