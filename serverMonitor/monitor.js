import axios from 'axios';

import serverArray from './config/servers';
import totalVoiceConfig from './config/totalvoice';

export default function serverMonitor() {
  setInterval(async function() {
    console.log('Iniciando monitoramento dos servidores');
    for (const server of serverArray) {
      await axios({
        url: server.url,
        method: 'get',
      })
        .then(() => {
          console.log(`${server.name} está no ar`);
        })
        .catch(() => {
          console.log(`${server.name} está fora do ar`);
          const totalVoice = totalVoiceConfig(
            server.developer.name,
            server.name,
            server.developer.telephone
          );

          return totalVoice;
        });
    }
    console.log('Finalizando monitoramento dos servidores');
  }, 10000);
}
