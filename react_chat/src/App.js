import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
import './App.css'
function App() {

    if(!localStorage.getItem('username')) return <LoginForm/>

    
    return (
        <ChatEngine 
            height="100vh"
            projectID="010d8511-de9e-4de4-9c64-3efa3a80962c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />  }
        />
        )
}
export default App
