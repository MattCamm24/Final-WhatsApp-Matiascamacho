import React, { useState } from 'react'
import './messageForm.css'

function MessageForm({ onSend }) {
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!message.trim()) return
    onSend(message.trim())
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <button type="button" className="attach-btn" title="Adjuntar"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button> 
      <button type="button" className="attach-btn" title="Adjuntar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sticky" viewBox="0 0 16 16">
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z"/>
</svg></button> 
      <input
        className="message-input"
        type="text"
        placeholder="Escribe un mensaje"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" className="send-btn" title="Enviar">➤</button>
    </form>
  )
}

export default MessageForm
