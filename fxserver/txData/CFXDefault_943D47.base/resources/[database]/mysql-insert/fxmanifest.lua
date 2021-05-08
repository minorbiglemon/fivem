fx_version 'cerulean'
game 'gta5'

author 'Adam Piper'
description 'database'
version '1.0.0'

client_script 'mysql-insert-client.lua'
server_scripts {
  'mysql-insert-server.lua',
  '@mysql-async/lib/MySQL.lua'
}
