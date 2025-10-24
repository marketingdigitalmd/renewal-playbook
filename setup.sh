#!/bin/bash

# The Renewal Playbook - Setup Script
# Este script automatiza a instalação inicial do projeto

echo "🌿 The Renewal Playbook - Setup"
echo "================================"
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js 18+ primeiro."
    echo "   Visite: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale npm primeiro."
    exit 1
fi

echo "✅ npm encontrado: $(npm --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
    echo "🚀 Pronto para começar!"
    echo ""
    echo "Para iniciar o servidor de desenvolvimento:"
    echo "  npm run dev"
    echo ""
    echo "Depois acesse: http://localhost:3000"
    echo ""
    echo "Outros comandos úteis:"
    echo "  npm run build  - Criar build de produção"
    echo "  npm run start  - Iniciar servidor de produção"
    echo "  npm run lint   - Verificar código"
    echo ""
    echo "📚 Consulte o QUICKSTART.md para começar rapidamente!"
    echo "📚 Leia o README.md para documentação completa!"
    echo ""
else
    echo ""
    echo "❌ Erro ao instalar dependências."
    echo "   Tente executar 'npm install' manualmente."
    exit 1
fi
