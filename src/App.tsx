import React from 'react';
import './App.css';
import ChatList from "./components/chat/ChatList";
import {IChatPreview} from "./model/i-chat-preview";

const chats: IChatPreview[] = [
    {id :1, logoUrl: 'https://placekitten.com/200/200', author: 'vova22', date: new Date(), message: 'здесь был Вова', title:'чатик с Вовой'},
    {id :2, logoUrl: 'https://placekitten.com/200/200', author: 'vova34', date: new Date(), message: 'здесь был Вова', title:'чатик с Вовой'},
    {id :3, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(2020,0,1), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :4, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(2020,0,2), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :5, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(2020,1,2), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :6, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :7, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :8, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :9, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'},
    {id :10, logoUrl: 'https://placekitten.com/200/200', author: 'vasya', date: new Date(), message: 'здесь был Воваааааааааа`````````````xxxxxxxxxааааааааааааааааааааааааа', title:'чатик с Вовой'}
]

function App() {
  return (
    <div className="App">
        <ChatList chatPreviews={chats}/>
    </div>
  );
}

export default App;
