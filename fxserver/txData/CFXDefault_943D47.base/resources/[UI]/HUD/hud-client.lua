-- local ped = PlayerPedId();
-- local pedInVehicle = IsPedInAnyVehicle(ped, true);
local hudItems = {
  speedo = false;
}

RegisterCommand('speedo', function(args)
  EnableGui(true, 'speedo')
end)

function EnableGui(enable, type)
  print(hudItems[type])
  hudItems[type] = enable;
  SetNuiFocus(enable, false);
  SendNUIMessage({
      type = type,
      enable = enable
  })
end;

function ShowVehicleSpeed()
  print('ShowVehicleSpeed triggered')
  EnableGui(not hudItems.speedo, 'speedo')
end

-- Citizen.CreateThread(function()
--   print('pedInVehicle', pedInVehicle);
--   if pedInVehicle then
--     -- EnableGui(true, 'speedo');
--     Citizen.Wait(0);
--   end
-- end)

-- Citizen.CreateThread(function()
-- 	while true do
-- 		local Ped = GetPlayerPed(-1)
-- 		if(IsPedInAnyVehicle(Ped)) then
-- 			local PedCar = GetVehiclePedIsIn(Ped, false)
-- 			if PedCar and GetPedInVehicleSeat(PedCar, -1) == Ped then

-- 				-- Speed
-- 				carSpeed = math.ceil(GetEntitySpeed(PedCar) * 3.6)
-- 				SendNUIMessage({
-- 					type = 'speedo',
-- 					speed = carSpeed
-- 				})
-- 			else
-- 				SendNUIMessage({
-- 					showhud = false
-- 				})
-- 			end
-- 		else
-- 			SendNUIMessage({
-- 				showhud = false
-- 			})
-- 		end

-- 		Citizen.Wait(1)
-- 	end
-- end)  