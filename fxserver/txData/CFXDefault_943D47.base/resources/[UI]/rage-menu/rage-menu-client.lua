RMenu.Add('showcase', 'main', RageUI.CreateMenu("RageUI", "~b~RAGEUI SHOWCASE"))
RMenu.Add('showcase', 'submenu', RageUI.CreateSubMenu(RMenu:Get('showcase', 'main'), "RageUI", "~b~RAGEUI SHOWCASE", nil, nil, "root_cause", "shopui_title_dynasty8"))

-- RageUI.CreateWhile(wait, menu, key, closure)
RageUI.CreateWhile(1.0, RMenu:Get('showcase', 'main'), 51, function()

 -- RageUI.IsVisible(menu, header, glare, instructional, items, panels)
    RageUI.IsVisible(RMenu:Get('showcase', 'main'), true, true, true, function()
        --- Items
     
    end, function()
        ---Panels
    end)

 -- RageUI.IsVisible(menu, header, glare, instructional, items, panels)
    RageUI.IsVisible(RMenu:Get('showcase', 'submenu'), false, false, false, function()
        --- Items

    end, function()
        ---Panels
      
    end)

end)