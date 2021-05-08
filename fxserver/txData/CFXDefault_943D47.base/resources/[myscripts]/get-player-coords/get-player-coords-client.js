/* eslint-disable no-undef */
const getPlayerCoords = () => {
  const player = PlayerPedId();
  const coords = GetEntityCoords(player);
  console.log('player coords: ', coords);
};

RegisterCommand('coords', () => {
  getPlayerCoords();
}, false);
