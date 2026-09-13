const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Dcraftnetwork.aternos.me',
    port: 38553,
    username: 'AFK_Bot',
    version: '1.20.1'
  });

  bot.on('spawn', () => {
    console.log('Bot sunucuya başarıyla katıldı!');
  });

  bot.on('end', (reason) => {
    console.log(`Bağlantı koptu (${reason}), 10 saniye sonra tekrar deneniyor...`);
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Hata oluştu:', err);
  });
}

createBot();

