import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatItem from "./components/chat/ChatItem";

function App() {
  return (
    <div className="App">
      <ChatItem iconUrl={logo} title={'Some group chat'} author={'The Shrek 2'} message={'Best movie i\'ve ever seedddddddddddddddddddddn!!!'} date={new Date()}/>
    </div>
  );
}

export default App;
