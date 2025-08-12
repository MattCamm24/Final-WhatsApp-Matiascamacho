import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { chats } from '../../data/chats';
import './chatList.css';


export default function ChatList() {
  const [search, setSearch] = useState('');

  const filteredChats = chats.filter(chat => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    const lastText = chat.messages[chat.messages.length - 1].text || '';
    return chat.name.toLowerCase().includes(q) || lastText.toLowerCase().includes(q);
  });

  return (
    <aside className="chat-list">
      <header className="chat-list-header">
      <div className="header-title">WhatsApp</div>
        <div className="header-actions">
          <button className="header-action new-chat"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg></button>
          <button className="header-action menu-button"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
        </div>
      </header>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      

      <div className="chat-list-items">
        {filteredChats.map(chat => (
          <Link key={chat.id} to={`/chat/${chat.id}`} className="chat-list-item">
            <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-last">{chat.messages[chat.messages.length - 1].text}</div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
