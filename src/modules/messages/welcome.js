export const welcomeMessages = {
  phrasesLeft: (getName, sab2, encodeURIComponent) => {
    const responses = [
      `${encodeURIComponent(getName(sab2.participants[0]))} acaba de sair do grupo!`,
      `${encodeURIComponent(getName(sab2.participants[0]))} nos deixou 😢`,
      `Tchau ${encodeURIComponent(getName(sab2.participants[0]))}!`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  phrasesWelcome: (mdata_2, getName, sab2, encodeURIComponent) => {
    const responses = [
      `Bem-vindo ao grupo ${encodeURIComponent(mdata_2.subject)}!`,
      `O membro ${encodeURIComponent(getName(sab2.participants[0].split('@')[0]))} acaba de chegar!`,
      `Leia as regras do grupo! ${encodeURIComponent(mdata_2.subject)}`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

export default welcomeMessages;