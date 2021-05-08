---@diagnostic disable: undefined-global
RegisterCommand('spawn', function(source, args)
  -- default vehicle
  local vehicleName = args[1] or 'adder'

  -- check if the vehicle exists
  if not IsModelInCdimage(vehicleName) or not IsModelAVehicle(vehicleName) then
    TriggerEvent('chat: addMessage', {
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
end, false)

RegisterCommand('garage', function()
  -- get the local player ped
  local playerPed = PlayerPedId()
  
  -- get player vehicle
  local vehicle = GetVehiclePedIsIn(playerPed, false)

  DeleteEntity(vehicle)
end, false)