# The Renewal Playbook - Web App

Um web app compassivo e interativo para renovação pessoal, focado em recuperar energia, clareza mental e equilíbrio emocional.

## 🌿 Visão Geral

The Renewal Playbook é uma aplicação web mobile-first construída com Next.js que transforma um protocolo de bem-estar em uma experiência digital interativa e personalizada. O app guia usuários através de uma jornada de 5 fases, oferecendo práticas diárias, reflexões guiadas e protocolos de emergência.

## ✨ Características Principais

- **Quiz Interativo**: Identifica o arquétipo de estresse do usuário (Exaustão Física, Sobrecarga Mental ou Agitação Emocional)
- **Jornada do Herói**: 5 fases progressivas de transformação pessoal
- **Kit de Ferramentas**: Protocolos de emergência para momentos de crise
- **Componentes Reutilizáveis**:
  - `AnchorPracticeCard`: Para hábitos-âncora de cada fase
  - `InsightPause`: Pausas reflexivas com salvamento local
  - `ToolkitCard`: Guias de protocolos de emergência
  - `Tooltip`: Explicações interativas de conceitos
  - `YouTubeSearchLink`: Links diretos para pesquisas no YouTube
- **Persistência Local**: Usa localStorage para salvar progresso e reflexões
- **Design Compassivo**: Interface calma com cores suaves e animações gentis
- **Totalmente Responsivo**: Experiência otimizada para mobile

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Deploy**: Otimizado para Vercel

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone ou extraia o projeto**:
```bash
cd renewal-playbook
```

2. **Instale as dependências**:
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**:
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**:
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Build e Deploy

### Build de Produção

```bash
npm run build
npm start
```

### Deploy na Vercel

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Conecte seu repositório à Vercel
3. A Vercel detectará automaticamente Next.js e configurará o deploy
4. Deploy automático em cada push para a branch principal

Ou use o CLI da Vercel:

```bash
npm install -g vercel
vercel
```

## 📁 Estrutura do Projeto

```
renewal-playbook/
├── app/
│   ├── layout.tsx              # Layout raiz com Sidebar
│   ├── page.tsx                # Página inicial com Quiz
│   ├── globals.css             # Estilos globais
│   ├── journey/
│   │   ├── page.tsx            # Overview da jornada
│   │   ├── the-calling/        # Fase 1
│   │   ├── the-awakening/      # Fase 2
│   │   ├── the-transformation/ # Fase 3
│   │   ├── the-mastery/        # Fase 4
│   │   └── the-return/         # Fase 5
│   ├── toolkit/
│   │   ├── page.tsx            # Overview do toolkit
│   │   ├── human-moment-reset/ # Protocolo 1
│   │   ├── sleep-rescue/       # Protocolo 2
│   │   ├── anti-anxiety/       # Protocolo 3
│   │   └── social-rescue/      # Protocolo 4
│   └── appendix/
│       ├── page.tsx            # Overview do apêndice
│       ├── budget-friendly/    # Adaptação 1
│       ├── vegetarian/         # Adaptação 2
│       ├── busy-moms/          # Adaptação 3
│       └── travelers/          # Adaptação 4
├── components/
│   ├── Providers.tsx           # Context Provider
│   ├── Sidebar.tsx             # Navegação lateral
│   ├── Quiz.tsx                # Quiz interativo
│   ├── AnchorPracticeCard.tsx  # Card de práticas-âncora
│   ├── InsightPause.tsx        # Pausas reflexivas
│   ├── ToolkitCard.tsx         # Card de protocolos
│   ├── Tooltip.tsx             # Tooltips explicativos
│   └── YouTubeSearchLink.tsx   # Links de busca
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Customização

### Cores

As cores principais estão definidas em `tailwind.config.ts`:

- **sage**: Tons de verde suave (principal)
- **earth**: Tons terrosos (secundário)
- **ocean**: Tons de azul (accent)

### Conteúdo

Para adicionar ou modificar conteúdo:

1. **Novas fases da jornada**: Crie uma nova pasta em `app/journey/[nome-da-fase]/page.tsx`
2. **Novos protocolos**: Crie uma nova pasta em `app/toolkit/[nome-do-protocolo]/page.tsx`
3. **Novas adaptações**: Crie uma nova pasta em `app/appendix/[nome-da-adaptacao]/page.tsx`

Cada página pode usar os componentes reutilizáveis já criados.

## 💾 Persistência de Dados

A aplicação usa `localStorage` para persistir:

- Resultado do quiz (arquétipo de estresse)
- Respostas das pausas de insight
- Estado de conclusão de práticas

Os dados são salvos automaticamente e persistem entre sessões.

### Resetar Dados

Para resetar todos os dados salvos:

```javascript
localStorage.removeItem('renewal-playbook-state');
```

Ou use o botão "Refazer o Quiz" na página inicial.

## 🔧 Desenvolvimento

### Adicionar Novos Componentes

1. Crie o arquivo em `components/NomeDoComponente.tsx`
2. Use TypeScript para tipagem
3. Adicione animações com Framer Motion quando apropriado
4. Mantenha o design consistente com a paleta de cores

### Boas Práticas

- Use o hook `useApp()` para acessar o estado global
- Mantenha componentes pequenos e focados
- Use `'use client'` para componentes interativos
- Teste responsividade em diferentes tamanhos de tela
- Use animações sutis e suaves

## 📱 Responsividade

O app é otimizado para:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

A sidebar se transforma em menu hamburger em telas menores.

## 🤝 Contribuindo

Se você quiser expandir o projeto:

1. Adicione novas fases da jornada
2. Crie novos protocolos de toolkit
3. Desenvolva adaptações personalizadas
4. Melhore a acessibilidade
5. Adicione testes automatizados

## 📄 Licença

Este projeto foi criado para fins educacionais e de bem-estar pessoal.

## 🙏 Agradecimentos

Baseado no protocolo "The Renewal Playbook" - um guia compassivo para renovação pessoal.

---

**Desenvolvido com 💚 usando Next.js, TypeScript e Tailwind CSS**

Para suporte ou questões, consulte a documentação do Next.js: [nextjs.org/docs](https://nextjs.org/docs)
