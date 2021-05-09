---@diagnostic disable: undefined-global
RegisterCommand('spawn', function(source, args)
  local vehicleName = args[1] or 'adder'
  SpawnVehicle(vehicleName)
end, false)


exports('SpawnWeapon', SpawnVehicle);
