---@diagnostic disable: undefined-global

local display = false;

function EnableNui(enable)
  display = enable;
  SetNuiFocus(enable, enable);
  SendNUIMessage({
    app = "react-fivem",
    method = "setVisibility",
    data = enable
  });
end;

RegisterNUICallback('closeUI', function(data)
  EnableNui(false);
end);

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if IsControlJustPressed(0, 311) then -- K key = 311
      print('k pressed');
      EnableNui(not display);
    end
  end
end);
