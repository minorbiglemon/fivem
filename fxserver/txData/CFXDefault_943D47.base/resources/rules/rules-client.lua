rules = {
  'test 1',
  'test 2',
  'test 3'
}

RegisterCommand('rules', function()
  for i, rule in ipairs(rules) do
    msg(rule, i)
  end
end, false)

function msg(text, index) 
  TriggerEvent('chatMessage', '[rule ' .. index .. ']', { 88, 214, 214 }, text)
end
