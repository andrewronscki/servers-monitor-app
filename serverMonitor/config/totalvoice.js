import TotalVoice from 'totalvoice-node';

const client = new TotalVoice(process.env.TOTALVOICE_KEY);

export default function totalVoiceConfig(
  developerName,
  serverName,
  developerPhone
) {
  const message = `${developerName} o ${serverName} está fora do ar, por favor faça alguma coisa o mais rápido possível!`;
  const options = {
    velocidade: 2,
    tipo_voz: 'br-Vitoria',
  };
  client.tts.enviar(developerPhone, message, options).then(() => {
    console.log(`O desenvolvedor ${developerName} já foi avisado`);
  });
}
