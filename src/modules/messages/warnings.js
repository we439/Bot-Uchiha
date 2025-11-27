export const warningMessages = { 
    sucessWarning: () => `Aviso referente a este grupo foi criado(a) com sucesso..`, 
    warningRemoved: () => `Avisos referente a esse grupo, foi tirado de todos os horários registrados..`, 
    noWarning: (prefix) => `Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`, 
    warningSyntax: (prefix) => `Exemplo: ${prefix}rg_aviso 12:00|Boa tarde a todos, prestem atenção nas regras do grupo`, 
    warningAdvertencia: (menc_os2, dfqn) => `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`, 
    finishAdvertencia: (menc_os2) => `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`, 
    bannedMessage: (blcp) => `@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot.`, 
    unbannedMessage: (blcp) => `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot.` 
}; 

export default warningMessages;