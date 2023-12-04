import { Methods, Polling, UpdateHandler, useFilter } from '@tgairbot/core';

const TOKEN = '<%= token %>';

const methods = new Methods(TOKEN);
const polling = new Polling(TOKEN);

polling.start().then();

UpdateHandler.onMessage(({ wrapper, params }) => {
  useFilter(/\/start/, params, async () => {
    await methods.sendMessage({
      text: 'Hello my friend!',
      chatId: params.chat.id,
    });
  });
});
