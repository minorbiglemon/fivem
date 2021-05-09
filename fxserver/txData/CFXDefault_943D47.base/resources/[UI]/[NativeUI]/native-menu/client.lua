Cars = {
  adder = 'Adder',
  valkyrietp = 'Aston Martin'
}

Weapons = {
  weapon_sniperrifle = 'Sniper',
  weapon_pistol = 'Pistol',
  weapon_rpg = 'RPG'
}

__menuPool = NativeUI.CreatePool();
mainMenu = NativeUI.CreateMenu('Main menu', '~b~this is the description');
__menuPool:Add(mainMenu);

function SpawnVehicleItem(menu)
  local submenu = __menuPool:AddSubMenu(menu, '~b~Spawn vehicle')
  local carMenu = __menuPool:AddSubMenu(submenu, 'Cars')
  for key, value in pairs(Cars) do
    local carItem = NativeUI.CreateItem(value, 'Spawn ' .. value)
    carItem.Activated = function(sender, item)
      print(sender)
      if item == carItem then
        exports.VehicleSpawner.SpawnVehicle(_, key, true);
      end
    end
    carMenu:AddItem(carItem)
  end
  submenu:AddItem(carMenu)
end

function RepairCar()
  local playerPed = PlayerPedId();
  local vehicle = GetVehiclePedIsIn(playerPed, false);
  SetEntityHealth(vehicle, 200);
end

function SpawnGunsItem(menu)
  local weapons = {}
  for _, value in pairs(Weapons) do
    table.insert(weapons, value)
  end
  local gunList = NativeUI.CreateListItem('Give gun', weapons, 1);
  menu:AddItem(gunList);
  menu.OnListSelect = function(sender, item, index)
    if item == gunList then
      local selectedGun = item:IndexToItem(index);
      -- giveWeapon();
    end
  end
end

SpawnVehicleItem(mainMenu);
SpawnGunsItem(mainMenu);
__menuPool:RefreshIndex();

Citizen.CreateThread(function()
  while true do
    __menuPool:ProcessMenus();
    if IsControlJustPressed(1, 29) then
      print('pressed B');
      mainMenu:Visible(not mainMenu:Visible());
    end
    Citizen.Wait(0);
  end
end)