function getShortMessages(messages) {
  'use strict';

  return messages
    .filter(message_obj => message_obj.message.length < 50)
    .map(message_obj => message_obj.message);
}


module.exports = getShortMessages;
