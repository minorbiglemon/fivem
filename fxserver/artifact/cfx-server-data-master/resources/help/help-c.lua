RegisterCommand('help', function()
  msg('Test 1');
  msg('Test 2');
  msg('Test 3');
end, false)

function msg(text) 
  TriggerEvent('chatMessage', '[Server]', { 255, 0, 0 }, text)
end
