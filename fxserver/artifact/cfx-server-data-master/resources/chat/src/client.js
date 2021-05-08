RegisterCommand('chat', async (source, args) => {
  const argString = args.join(' ');
  emitNet('js:chat', (argString || 'Nothing...'), [92, 123, 173]);
  return;
});