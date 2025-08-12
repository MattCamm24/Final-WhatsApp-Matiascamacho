import React from 'react'
import './message.css'

function Message({ from, text, time }) {
  const isMe = from === 'me'
  return (
    <div className={`message ${isMe ? 'me' : 'them'}`}>
      <div className="bubble">
        <div className="bubble-text">{text}</div>
        <div className="bubble-time">{time}</div>
        
      </div>
    </div>
  )
}

export default Message
