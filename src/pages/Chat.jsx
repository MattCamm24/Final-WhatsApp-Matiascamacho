import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import MessageForm from '../components/MessageForm/MessageForm';

export default function Chat() {
  const { chatId } = useParams();
  const chat = useChat(chatId);


  const [messages, setMessages] = useState(chat ? chat.messages : []);


  useEffect(() => {
    setMessages(chat ? chat.messages : []);
  }, [chatId, chat]);

  function handleSend(text) {
    const newMessage = { from: 'me', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newMessage]);

  }

  if (!chat) {
    return <div style={{ padding: 20 }}>Chat no encontrado</div>;
  }

  return (
    <div className="chat-page" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header className="chat-header" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </Link>
        <img src={chat.avatar} alt={chat.name} className="chat-avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <div>
          <div style={{ fontWeight: 600 }}>{chat.name}</div>
          <div style={{ fontSize: 12, color: '#666' }}>En línea</div>
        </div>
      </header>
      <ChatWindow messages={messages} />
      <MessageForm onSend={handleSend} />
    </div>
  );
}
