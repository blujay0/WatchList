import React from "react"
import { ThemeContext } from './App.js'
import { ChatEngine } from 'react-chat-engine';

const Chat = ( {username} ) => {

  return (
    <>
      <h1>Chat</h1>
      {username && <ChatEngine
        projectID='6602c45c-b799-4c90-a164-2aa8ea88476c'
        userName={username}
        userSecret='same_secret'
      />}  
    </>
  )
}

export default Chat;