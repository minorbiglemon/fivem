/* eslint-disable no-undef */
const apartments = { x: -268.56005859375, y: -957.6028442382812, z: 31.2231388092041 };
const spawnOptions = {
  ...apartments,
  model: 'a_m_m_skater_01',
  heading: 197.624,
  skipFade: false
};

on('onClientGameTypeStart', () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {
    exports.spawnmanager.spawnPlayer(spawnOptions, () => {
      const player = GetPlayerIndex();
      const playerName = GetPlayerName(player);
      emit('chat:addMessage', { args: [`Welcome ${playerName}!`] });
    });
  });
});

exports.spawnmanager.setAutoSpawn(true);

exports.spawnmanager.forceRespawn();
