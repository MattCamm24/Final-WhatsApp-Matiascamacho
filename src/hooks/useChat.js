import { chats } from '../data/chats';
/**

 * @param {string} chatId 
 * @returns {object|null}
 */
export function useChat(chatId) {
  if (!chatId) return null;
  const chat = chats.find(c => String(c.id) === String(chatId));
  return chat || null;
}
