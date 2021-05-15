---@diagnostic disable: undefined-global
RegisterCommand('vehicle', function(source, args)
  local vehicleName = args[1] or 'adder'
  SpawnVehicle(vehicleName)
end, false)

RegisterCommand('garage', function()
  DeleteVehiclePedIsIn()
end, false)

local Vehicle;

function SpawnVehicle(vehicleName, removeCurrentCar)
  if not type(vehicleName) then
    return nil, 'vehicleName not of type string';
  end
  removeCurrentCar = removeCurrentCar or true
  -- check if the vehicle exists
  if not IsModelInCdimage(vehicleName) or not IsModelAVehicle(vehicleName) then
    TriggerEvent('chat:addMessage', {
      args = {'Vehicle does not exist: ' .. vehicleName}
    })
    return
  end

  -- load the model
  RequestModel(vehicleName)

  -- wait for the model to load
  while not HasModelLoaded(vehicleName) do
    Wait(500)
  end

  if removeCurrentCar then
    DeleteVehiclePedIsIn()
  end

  -- get the player's position
  local playerPed = PlayerPedId() -- get the player ped
  local pos = GetEntityCoords(playerPed) -- get the player pos

  local vehicle = CreateVehicle((vehicleName), pos.x, pos.y, pos.z, GetEntityHeading(playerPed), true, false)

  -- set the player ped into the vehicle's driver seat
  SetPedIntoVehicle(playerPed, vehicle, -1)
  SetVehicleNumberPlateText(vehicle, 'P1P3R')
  -- give the vehicle back to the game (when to despawn)
  SetEntityAsNoLongerNeeded(vehicle)
  -- release the model
  SetModelAsNoLongerNeeded(vehicleName)
  -- tell the player
  TriggerEvent('chat:addMessage', {
    args = {'Spawned: ' .. vehicleName}
  })
end

function DeleteVehiclePedIsIn()
  -- get the local player ped
  local playerPed = PlayerPedId()

  -- get player vehicle
  local vehicle = GetVehiclePedIsIn(playerPed, false)

  DeleteEntity(vehicle)
end

function RepairVehicle()
  local playerPed = PlayerPedId();
  local vehicle = GetVehiclePedIsUsing(playerPed, false);
  print('attempting to repair', vehicle);
  local maxVehicleHealth = 1000;
  for i = 0, 3, 0 do
    SetTyreHealth(vehicle, i, maxVehicleHealth);
  end
  SetVehicleBodyHealth(vehicle, maxVehicleHealth);
  SetVehicleDeformationFixed(vehicle);
  SetVehicleEngineHealth(vehicle, maxVehicleHealth);
  SetVehiclePetrolTankHealth(vehicle, maxVehicleHealth);
  print('GetVehicleEngineHealth', GetVehicleEngineHealth(vehicle))
  print('GetVehicleBodyHealth', GetVehicleBodyHealth(vehicle))
  print('GetVehicleBodyHealth_2', GetVehicleBodyHealth_2(vehicle))
  print('GetVehiclePetrolTankHealth', GetVehiclePetrolTankHealth(vehicle))
  -- SetVehicleDamage(vehicle, 0.0, 0.0, 0.33, 200.0, 100.0, false)
end

exports('RepairVehicle', RepairVehicle);
exports('SpawnVehicle', SpawnVehicle);
exports('DeleteVehiclePedIsIn', DeleteVehiclePedIsIn);
