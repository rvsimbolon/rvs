import { MessageType, proto } from '@adiwajshing/baileys';
import { ResolverFunction, ResolverResult } from '../types/type';

export const wrongCommands: ResolverFunction = (message: proto.WebMessageInfo, jid: string): ResolverResult => {
  const msg = `Sorry, I don't understand`;
  return {
    destinationId: jid,
    type: MessageType.text,
    message: msg,
    options: {
      contextInfo: {
        quotedMessage: message.message,
      },
      quoted: message,
    },
  };
};
