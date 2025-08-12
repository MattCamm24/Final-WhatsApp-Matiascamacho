import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import ChatList from './components/ChatList/ChatList';
import Chat from './pages/Chat';
import Home from './pages/Home';
import './css/App.css';

function ChatLayout() {
  return (
    <div className="app-layout">
      <ChatList />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatLayout />}>
          <Route index element={<Home />} />
          <Route path="chat/:chatId" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}
