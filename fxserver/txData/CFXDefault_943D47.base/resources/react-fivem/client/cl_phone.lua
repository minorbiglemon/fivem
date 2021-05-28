---@diagnostic disable: undefined-global

local phoneVisible = false;

function EnablePhone(enable)
  phoneVisible = enable;

  SetNuiFocus(enable, enable);
  SendNUIMessage({
    app = "react-fivem",
    method = "setPhoneVisibility",
    data = enable
  });
end;

RegisterNUICallback('closePhone', function(data)
  EnablePhone(false);
end);

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if IsControlJustPressed(0, 199) then -- P
      print('p pressed');
      EnablePhone(not phoneVisible);
    end
    if IsControlJustPressed(0, 249) then -- N
      print('n pressed');
      EnablePhone(not phoneVisible);
    end
    if IsControlJustPressed(0, 244) then -- M
      print('m pressed');
      EnablePhone(not phoneVisible);
    end
  end
end);
