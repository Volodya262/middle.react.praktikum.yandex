import React from 'react';
import './App.css';
import {Chat} from "../chat/Chat";

export const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Chat/>
        </div>
    );
}