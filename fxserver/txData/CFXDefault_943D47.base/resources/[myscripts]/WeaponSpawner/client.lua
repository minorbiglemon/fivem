---@diagnostic disable: undefined-global
RegisterCommand('weapon', function(source, args)
  local weapon = args[1] or 'weapon_pistol'
  GiveWeapon(weapon);
end, false)

function GiveWeapon(weapon)
  local playerPed = PlayerPedId();
  GiveWeaponToPed(playerPed, weapon, 100, false, true)
end

exports('GiveWeapons', GiveWeapon)