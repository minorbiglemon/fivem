RegisterCommand('freecam', function()
  StartFreeCam()
end)


function StartFreeCam()
  local playerPed = PlayerPedId();
  local position = GetEntityCoords(playerPed);
  local freecam = CreateCamWithParams("DEFAULT_SCRIPTED_FLY_CAMERA", position.x, position.y, position.z, 0, 180, 0, 100, true, 0);
  SetCamActive(freecam, true);
  AttachCamToPedBone(freecam, playerPed, 0, position.x, position.y, position.z, GetEntityHeading(playerPed));
end