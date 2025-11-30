// ╔════════════════════════════════════════════════════════════════╗
// ║                 🔱 UCHIHA-BOT MAIN ENTRY POINT 🔱              ║
// ║                    Versão: 10.0.1                              ║
// ║                   Desenvolvido por Rúben Silver               ║
// ╚════════════════════════════════════════════════════════════════╝

import process from 'node:process';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import cfonts from 'cfonts';
import { fileURLToPath } from 'url';

// ═══════════════════════════════════════════════════════════════════
// 📍 CONFIGURAÇÕES INICIAIS
// ═══════════════════════════════════════════════════════════════════

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importar configurações do bot
const { ownerName, botName, botNumber, ownerContact } = await import('./exports.js');
const { owner, botInfo } = await import('./messages.js');
const { ping } = await import('./ping.js');
const { 
  UCHIHA_THEME,
  menuPrincipal,
  menuOpcoes,
  menuBot,
  menuAdm,
  menuVip,
  menuDono,
  menuHelp,
  menuLogos,
  menuJogos,
  menuPremium,
  menuStickers,
  menuPesquisas,
  menuDownloads,
  menuAleatórios,
  menuEfeitos,
  menuAlteradores,
  menuInformativo,
  menuBrincadeiras
} = await import('./menu.js');

// ═══════════════════════════════════════════════════════════════════
// 🎨 TEMA E CONFIGURAÇÃO
// ═══════════════════════════════════════════════════════════════════

const BOT_CONFIG = {
  version: '10.0.1',
  prefix: '! ',
  owner: ownerName,
  botName: botName,
  botNumber: botNumber,
  ownerContact: ownerContact,
  description: 'Meu Bot simples e leve para o WhatsApp!  🤖'
};

// ═══════════════════════════════════════════════════════════════════
// 🎯 DIRETÓRIOS E CAMINHOS
// ═══════════════════════════════════════════════════════════════════

const PATHS = {
  src: path.join(__dirname, 'src'),
  config: path.join(__dirname, 'src', 'config'),
  commands: path.join(__dirname, 'src', 'commands'),
  middleware: path.join(__dirname, 'src', 'middleware'),
  utils: path.join(__dirname, 'src', 'utils'),
  database: path.join(__dirname, 'src', 'config', 'database. js'),
  authBaileys: path.join(__dirname, 'auth_info_baileys')
};

// ═══════════════════════════════════════════════════════════════════
// 🛠️ FUNÇÕES UTILITÁRIAS
// ═══════════════════════════════════════════════════════════════════

/**
 * Cria os diretórios necessários se não existirem
 */
async function setupDirectories() {
  const dirs = [PATHS.src, PATHS.config, PATHS.commands, PATHS.middleware, PATHS.utils];
  
  for (const dir of dirs) {
    try {
      await fs.ensureDir(dir);
      console.log(`${chalk.green('✓')} Diretório verificado: ${chalk.cyan(path.relative(__dirname, dir))}`);
    } catch (error) {
      console.error(`${chalk.red('✗')} Erro ao criar diretório ${dir}:`, error.message);
    }
  }
}

/**
 * Carrega arquivo de configuração ou cria um padrão
 */
async function loadConfig() {
  const configPath = path.join(__dirname, '. env');
  
  if (! fs.existsSync(configPath)) {
    console.log(chalk.yellow('⚠️ Arquivo . env não encontrado. Criando com valores padrão...'));
    
    const exampleEnv = `
# Bot Configuration
BOT_OWNER_ID="${ownerContact}"
BOT_OWNER_EMAIL="owner@example.com"
DATABASE_URL="sqlite://database.db"
API_KEY="your_api_key_here"
LOG_LEVEL="info"
PREMIUM_FEATURE_ENABLED="false"
    `.trim();
    
    await fs.writeFile(configPath, exampleEnv);
    console.log(chalk.green('✓ Arquivo .env criado com sucesso!'));
  }
}

/**
 * Exibe banner de inicialização
 */
function displayBanner() {
  console. clear();
  
  cfonts.say('UCHIHA-BOT', {
    font: 'block',
    align: 'center',
    colors: ['magenta', 'cyan'],
    background: 'transparent',
    letterSpacing: 2
  });

  console.log(`
${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║  ${UCHIHA_THEME. divider}  ║
${UCHIHA_THEME.empty}
║           ${UCHIHA_THEME. logo}          ║
${UCHIHA_THEME.empty}
║       ${UCHIHA_THEME.welcome}       ║
${UCHIHA_THEME.empty}
║  ${UCHIHA_THEME.divider}  ║
${UCHIHA_THEME.empty}
${UCHIHA_THEME. borderEnd}
  `);

  console.log(chalk.cyan. bold('╔════════════════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║') + chalk.white. bold('           📋 INFORMAÇÕES DO BOT - UCHIHA v10.0.1              ') + chalk.cyan.bold('║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════════════════════════════════╝\n'));

  const info = [
    { label: '🤖 Nome do Bot:', value: chalk.cyan(BOT_CONFIG. botName) },
    { label: '👤 Proprietário:', value: chalk.cyan(BOT_CONFIG.owner) },
    { label: '📱 WhatsApp:', value: chalk.cyan(BOT_CONFIG.botNumber) },
    { label: '💬 Contato:', value: chalk.cyan(BOT_CONFIG.ownerContact) },
    { label: '⚙️ Prefixo:', value: chalk.cyan(BOT_CONFIG.prefix) },
    { label: '🔗 Telegram:', value: chalk.cyan(owner. telegram) },
    { label: '📷 Instagram:', value: chalk.cyan('instagram.com/ruben_siilver') },
    { label: '👹 Facebook:', value: chalk.cyan('facebook.com/rúben.silver') }
  ];

  info.forEach(item => {
    console.log(`  ${chalk.yellow(item.label)} ${item.value}`);
  });

  console.log(`\n  ${chalk.green('✓')} Versão: ${chalk.cyan(BOT_CONFIG. version)}`);
  console. log(`  ${chalk.green('✓')} Status: ${chalk.green. bold('ATIVO')}`);
  console.log(`  ${chalk.green('✓')} Node.js: ${chalk.cyan(process.version)}`);
  console.log(`  ${chalk. green('✓')} Plataforma: ${chalk.cyan(process.platform)}\n`);
}

/**
 * Retorna informações de status do bot
 */
function getBotStatus() {
  return {
    online: true,
    version: BOT_CONFIG.version,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    platform: process.platform,
    nodeVersion: process.version
  };
}

/**
 * Carrega todos os comandos de forma dinâmica
 */
async function loadCommands() {
  const commands = new Map();
  
  try {
    const commandsDir = PATHS.commands;
    
    if (!fs.existsSync(commandsDir)) {
      console. log(chalk.yellow('⚠️ Pasta de comandos não encontrada. Criando... '));
      await fs.ensureDir(commandsDir);
      return commands;
    }

    const categories = await fs.readdir(commandsDir);
    
    for (const category of categories) {
      const categoryPath = path.join(commandsDir, category);
      const stat = await fs.stat(categoryPath);
      
      if (stat.isDirectory()) {
        const files = await fs.readdir(categoryPath);
        
        for (const file of files) {
          if (file.endsWith('.js')) {
            try {
              const commandPath = path.join(categoryPath, file);
              const command = await import(commandPath);
              const commandName = path.basename(file, '.js');
              
              commands.set(commandName, {
                ... command,
                category: category,
                name: commandName
              });
              
              console.log(`${chalk.green('✓')} Comando carregado: ${chalk.cyan(`${category}/${commandName}`)}`);
            } catch (error) {
              console.error(`${chalk. red('✗')} Erro ao carregar comando ${file}:`, error.message);
            }
          }
        }
      }
    }
    
    console.log(`${chalk.green('✓')} Total de comandos carregados: ${chalk.cyan(commands.size)}\n`);
  } catch (error) {
    console.error(`${chalk.red('✗')} Erro ao carregar comandos:`, error. message);
  }
  
  return commands;
}

/**
 * Sistema de comandos de menu
 */
function getMenuByCommand(command) {
  const menus = {
    'menu': menuOpcoes,
    'menu-bot': menuBot,
    'menu-adm': menuAdm,
    'menu-vip': menuVip,
    'menu-dono': menuDono,
    'menu-help': menuHelp,
    'menu-logos': menuLogos,
    'menu-jogos': menuJogos,
    'menu-premium': menuPremium,
    'menu-stickers': menuStickers,
    'menu-pesquisas': menuPesquisas,
    'menu-downloads': menuDownloads,
    'menu-aleatórios': menuAleatórios,
    'menu-efeitos': menuEfeitos,
    'menu-alteradores': menuAlteradores,
    'menu-informativo': menuInformativo,
    'menu-brincadeiras': menuBrincadeiras
  };
  
  return menus[command] || null;
}

/**
 * Processa comandos recebidos
 */
async function handleCommand(command, args, senderInfo) {
  try {
    // Verificar se é um comando de menu
    const menu = getMenuByCommand(command);
    if (menu) {
      return menu;
    }

    // Comandos internos básicos
    switch (command) {
      case 'ping':
        return `${chalk.green('🏓')} Pong! ${ping()}`;
      
      case 'info':
      case 'botinfo':
        return `
${UCHIHA_THEME.border}
${UCHIHA_THEME. empty}
║        ℹ️ INFORMAÇÕES DO BOT UCHIHA               ║
${UCHIHA_THEME.empty}
║  Nome: ${BOT_CONFIG.botName}
║  Versão: ${BOT_CONFIG.version}
║  Prefixo: ${BOT_CONFIG.prefix}
║  Owner: ${BOT_CONFIG.owner}
║  Contato: ${BOT_CONFIG. ownerContact}
${UCHIHA_THEME. empty}
${UCHIHA_THEME. borderEnd}
`;
      
      case 'status':
        const status = getBotStatus();
        return `
${chalk.cyan('📊 STATUS DO BOT')}
Versão: ${status.version}
Uptime: ${Math.floor(status.uptime)} segundos
Plataforma: ${status.platform}
Node.js: ${status. nodeVersion}
RAM: ${Math.round(status. memory. heapUsed / 1024 / 1024)}MB / ${Math.round(status.memory.heapTotal / 1024 / 1024)}MB
`;
      
      case 'help':
        return `${menuHelp}`;
      
      case 'owner':
        return `
${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║        👤 CONTATO DO PROPRIETÁRIO               ║
${UCHIHA_THEME.empty}
║  Nome: ${owner.name}
║  WhatsApp: ${owner.whatsapp}
║  Telegram: ${owner.telegram}
║  Instagram: ${owner.instagram}
║  Facebook: ${owner.facebook}
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}
`;
      
      default:
        return null;
    }
  } catch (error) {
    console. error(`${chalk.red('✗')} Erro ao processar comando:`, error.message);
    return `${chalk.red('❌')} Erro ao processar comando: ${error.message}`;
  }
}

/**
 * Inicializa o bot
 */
async function initializeBot() {
  try {
    console.log(`${chalk.yellow('⚙️')} Iniciando Uchiha-Bot.. .\n`);

    // Configurar diretórios
    await setupDirectories();
    
    // Carregar . env
    await loadConfig();
    
    // Exibir banner
    displayBanner();
    
    // Carregar comandos
    console.log(`${chalk.cyan('📦')} Carregando comandos.. .\n`);
    const commands = await loadCommands();

    console.log(chalk.green. bold('\n✓ Bot Uchiha-Bot v10.0.1 inicializado com sucesso!\n'));
    console.log(`${chalk.cyan('👁️  Sharingan Ativo - Online 👁️')}\n`);
    console.log(`${chalk. yellow('💡')} ${chalk.white('Digite')} ${chalk.cyan('!' + 'menu')} ${chalk.white('para ver os comandos disponíveis.')}\n`);
    console. log(chalk.green.bold('🔱 Powered by Uchiha 🔱\n'));

    // Retornar objeto com funções essenciais
    return {
      config: BOT_CONFIG,
      commands,
      handleCommand,
      getMenuByCommand,
      status: getBotStatus(),
      paths: PATHS
    };

  } catch (error) {
    console.error(`${chalk. red('✗')} ERRO AO INICIALIZAR BOT:`, error);
    process.exit(1);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 🚀 PONTO DE ENTRADA PRINCIPAL
// ═══════════════════════════════════════════════════════════════════

async function main() {
  try {
    // Inicializar bot
    const bot = await initializeBot();

    // Aqui você conectaria com Baileys/WhatsApp
    // import { connectToWhatsApp } from './src/config/baileys. js';
    // await connectToWhatsApp(bot);

    // Exemplos de uso (remover em produção)
    console.log(chalk.yellow('\n📝 EXEMPLOS DE COMANDOS:\n'));
    console.log(`  ${chalk.cyan('!')}ping - Verificar latência`);
    console.log(`  ${chalk.cyan('!')}info - Informações do bot`);
    console.log(`  ${chalk.cyan('!')}menu - Ver menu principal`);
    console.log(`  ${chalk.cyan('!')}help - Ajuda completa\n`);

  } catch (error) {
    console.error(`${chalk.red('ERRO FATAL:')}`, error);
    process.exit(1);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 📤 EXPORTS
// ═══════════════════════════════════════════════════════════════════

export { 
  initializeBot, 
  handleCommand, 
  getMenuByCommand, 
  getBotStatus,
  BOT_CONFIG,
  PATHS 
};

// ═══════════════════════════════════════════════════════════════════
// 🎬 EXECUTAR
// ═══════════════════════════════════════════════════════════════════

main(). catch(error => {
  console.error(`${chalk.red('ERRO NÃO CAPTURADO:')}`, error);
  process. exit(1);
});
