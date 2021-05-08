RegisterNetEvent('display')
AddEventHandler('display', function(arg)
  TriggerEvent('chat:addMessage', '[database]', {0,0,255}, arg)
end)