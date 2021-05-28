/* eslint-disable no-undef */
const getPlayerCoords = () => {
  const player = PlayerPedId();
  const coords = GetEntityCoords(player);
  const heading = GetEntityHeading(player);
  console.log(`player coords: ${coords}, heading: ${heading}`);
};

RegisterCommand('coords', () => {
  getPlayerCoords();
}, false);
