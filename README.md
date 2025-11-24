# 🔱 Bot Uchiha

Um bot incrível e leve para WhatsApp construído com Node.js e Baileys com **tema épico Uchiha**! 👁️

## ✨ Funcionalidades Principais

### 💰 **Sistema de Economia**
- 💵 Consultar saldo de moedas de Chakra
- 📤 Transferir moedas entre usuários
- 🎁 Recompensa diária automática (500 moedas)

### 📈 **Sistema de XP e Níveis**
- ⚡ Ganhe 5 XP a cada mensagem
- 📊 Suba de nível automaticamente a cada 100 XP
- 🏆 Ranking dos melhores jogadores
- 💎 Top 5 usuários mais ricos

### 🎮 **Diversão e Entretenimento**
- 😂 Piadas aleatórias em português
- 🎲 Role um dado (1-6)
- 🪙 Jogue cara ou coroa

### 🛠️ **Utilidades Gerais**
- 🏓 Teste de conexão do bot
- 📱 Menu interativo e temático
- 📚 Sistema completo de ajuda
- ℹ️ Informações sobre o bot

## 🎨 **Design Temático Uchiha**
- Menu animado com bordas ASCII temáticas
- Layout épico com emojis
- Design visual profissional e imersivo
- Totalmente em português! 🇧🇷

## 🚀 Como Começar

### 1️⃣ Instalação

```bash
git clone https://github.com/rubensilver/Bot-Uchiha.git
cd Bot-Uchiha
npm install
```

### 2️⃣ Executar o Bot

```bash
npm start
```

Escaneie o QR Code com seu WhatsApp e o bot estará pronto para usar! 👁️

## 📋 Lista Completa de Comandos

### 💰 Comandos de Economia
```
!saldo              📊 Ver seu saldo atual em moedas
!transferir @user   💸 Transferir moedas para outro usuário
                       Uso: !transferir @user 500
!diario             🎁 Receber 500 moedas de recompensa diária
```

### 📈 Comandos de XP e Ranking
```
!xp                 👤 Ver seu XP atual e nível
!ranking            🏆 Ver o Top 5 jogadores por XP
!top-ricos          💎 Ver os 5 usuários mais ricos
```

### 🎮 Comandos de Diversão
```
!piada              😂 Ouvir uma piada aleatória
!dado               🎲 Rolar um dado (1-6)
!moeda              🪙 Jogar moeda (cara ou coroa)
```

### ℹ️ Comandos de Informação
```
!menu               📱 Mostrar o menu principal temático
!ajuda              📚 Ver a lista completa de comandos
!info               ℹ️  Informações sobre o bot Uchiha
!ping               🏓 Testar a conexão com o bot
```

## 📁 Estrutura do Projeto

```
Bot-Uchiha/
├── src/
│   ├── config/
│   │   └── database.js              # Sistema de banco de dados em memória
│   ├── commands/
│   │   ├── index.js                 # Gerenciador central de comandos
│   │   ├── economia.js              # Comandos de moedas e economia
│   │   ├── xp.js                    # Comandos de XP e ranking
│   │   ├── diversao.js              # Comandos de diversão
│   │   └── info.js                  # Comandos de informação
│   └── utils/
│       ├── helpers.js               # Funções auxiliares
│       ├── jokes.js                 # Base de piadas em português
│       ├── constants.js             # Constantes globais
│       └── errorHandler.js          # Tratamento de erros
├── index.js                         # Arquivo principal do bot
├── menu.js                          # Menu temático Uchiha com animação
├── submenu.js                       # Submenus por categoria
├── conf.js                          # Arquivo de configuração
├── package.json                     # Dependências do projeto
└── README.md                        # Esta documentação
```

## ⚙️ Configuração Personalizada

Edite o arquivo `conf.js` para personalizar o bot:

```javascript
// Nome do seu bot
export const BOT_NAME = '𝐔𝐜𝐡𝐢𝐡𝐚 𝐁𝐨𝐭 🤖';

// Prefixo dos comandos
export const PREFIX = '!';

// Outros settings
export const XP_POR_MENSAGEM = 5;
export const XP_POR_NIVEL = 100;
export const RECOMPENSA_DIARIA = 500;
```

## 🌐 Hospedagem 24/7

O bot está totalmente configurado para rodar no **Render.com**:

1. Faça fork deste repositório
2. Conecte no Render.com
3. Deploy automático
4. Bot rodando 24/7! 🚀

## 🎯 Características Principais

✅ **Sistema de XP Automático** - Ganhe XP a cada mensagem  
✅ **Banco de Dados em Memória** - Rápido e eficiente  
✅ **Menu Interativo** - Interface amigável e temática  
✅ **Ranking em Tempo Real** - Veja os melhores jogadores  
✅ **100% em Português** - Fácil compreensão  
✅ **Código Modular** - Fácil de expandir e modificar  
✅ **Pronto para Produção** - Sem dependências externas  
✅ **Tema Uchiha Épico** - Visual incrível e imersivo  

## 💡 Como Funciona o Sistema de Economia

1. **Saldo Inicial**: Todo novo usuário começa com 0 moedas
2. **Ganhar Moedas**:
   - Use `!diario` para ganhar 500 moedas por dia
   - Ganhe moedas através de desafios (futuramente)
3. **Gastar Moedas**:
   - Transferir para outros usuários com `!transferir`
   - Usar em mini-jogos (futuramente)

## 📊 Como Funciona o Sistema de XP

1. **Ganhar XP**:
   - 5 XP por cada mensagem enviada
   - Bônus por atividades (futuramente)
2. **Subir de Nível**:
   - A cada 100 XP você sobe um nível
   - Aumento progressivo de dificuldade
3. **Recompensas por Nível**:
   - Bônus de moedas ao subir de nível (futuramente)
   - Desbloqueio de novos comandos (futuramente)

## 🔄 Atualizações Futuras

- [ ] Sistema de mini-jogos (pedra, papel, tesoura)
- [ ] Duelos entre usuários
- [ ] Sistema de guild/clã
- [ ] Achievements e trophies
- [ ] Integração com APIs externas
- [ ] Sistema de loja virtual
- [ ] Customização de perfil

## 📝 Licença

MIT © Rúben Silver

Sinta-se livre para usar, modificar e distribuir este projeto!

## 🤝 Contribuições

Todas as contribuições são bem-vindas!

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Tem dúvidas ou problemas? Abra uma issue neste repositório!

---

### 🔱 **Desenvolvido com 💜 Poder Uchiha!**

**👁️ Sharingan**: Ativo  
**⚡ Poder**: Máximo  
**✅ Status**: Online e em Desenvolvimento  

**Versão Atual**: 2.0.0  
**Ultima Atualização**: 2024