import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message.jsx'
import './chatWindow.css'

function ChatWindow({ messages }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div ref={containerRef} className="chat-window">
      {messages.length === 0 && (
        <p className="no-messages">No hay mensajes aún.</p>
      )}
      {messages.map((msg, i) => (
        <Message key={i} from={msg.from} text={msg.text} time={msg.time} />
      ))}
    </div>
  )
}

export default ChatWindow
