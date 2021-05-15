---@diagnostic disable: undefined-global
-- Example of how it works. Look at the `useCoreService`, and the nui function in `nui-events`

local display = false;

RegisterCommand('show:nui', function(source, args, rawCommand)
  SendNUIMessage({
    app = "react-fivem",
    method = "setVisibility",
    data = true
  });
end, false);

RegisterCommand('hide:nui', function(source, args, rawCommand)
  SendNUIMessage({
    app = "react-fivem",
    method = "setVisibility",
    data = false
  });
end, false);

function EnableNui(enable)
  display = enable;
  SetNuiFocus(false, enable);
  SendNUIMessage({
    app = "react-fivem",
    method = "setVisibility",
    data = enable
  });
end;

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if IsControlJustPressed(0, 311) then -- K key = 311, P key = 199
      EnableNui(not display);
    end
  end
end);