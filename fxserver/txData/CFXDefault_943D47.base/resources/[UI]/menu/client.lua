---@diagnostic disable: undefined-global
local display = false;

function EnableGui(enable)
  display = enable;
  SetNuiFocus(enable, enable);
  SendNUIMessage({
      type = 'menu',
      enable = enable
  })
end;

function Chat(playerName, str, color)
  local message = str;
  if (playerName) then
    message = {'[' .. playerName .. ']', str}
  end
  TriggerEvent('chat:addMessage', {
    color = color,
    multiline = true,
    args = message
  })
end

Citizen.CreateThread(function()
  while true do
    if IsControlJustReleased(0, 244) then
      EnableGui(not display)
    end
    Citizen.Wait(0)
  end
end)

RegisterCommand('menu', function(source)
  EnableGui(true)
end)

RegisterNUICallback('main', function(data)
  local player = GetPlayerIndex();
  local playerName = GetPlayerName(player);
  Chat(playerName, data.text, {0,255,0});
  EnableGui(false);
end);

RegisterNUICallback('error', function(data)
  Chat(data.error, {255,0,0});
  EnableGui(false);
end);

RegisterNUICallback('exit', function(data)
  EnableGui(false);
end);

Citizen.CreateThread(function()
  while display do
    Citizen.Wait(0)
    DisableControlAction(0, 1, display) -- LookLeftRight
    DisableControlAction(0, 2, display) -- LookUpDown
    DisableControlAction(0, 142, display) -- MeleeAttackAlternate
    DisableControlAction(0, 18, display) -- Enter
    DisableControlAction(0, 322, display) -- ESC
    DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
  end
end)
