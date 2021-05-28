Cars = {
  adder = 'Adder',
  comet = 'Comet',
  cheetah = 'Cheetah',
  valkyrietp = 'Aston Martin',
  mbc63 = 'Mercedes-Benz C63 AMG',
  fmgt500 = 'Ford Mustang GT 2020'
}
-- 19gt500
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
      if item == carItem then
        exports.VehicleManager.SpawnVehicle(_, key, true);
        mainMenu:Visible(false);
      end
    end
    carMenu:AddItem(carItem)
  end
  submenu:AddItem(carMenu)
end

function RepairVehicleItem(menu)
  local repairOption = NativeUI.CreateItem('Repair vehicle');
  menu:AddItem(repairOption);
  repairOption.Activated = function(sender, item)
    if item == repairOption then
      exports.VehicleManager.RepairVehicle();
      mainMenu:Visible(false);
    end
  end
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
RepairVehicleItem(mainMenu);
SpawnGunsItem(mainMenu);
__menuPool:RefreshIndex();

Citizen.CreateThread(function()
  while true do
    __menuPool:ProcessMenus();
    if IsControlJustPressed(1, 29) then
      mainMenu:Visible(not mainMenu:Visible());
    end
    Citizen.Wait(0);
  end
end)