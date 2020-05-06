import React from 'react';
import './App.css';
import {Chat} from "../chat/Chat";
import {Route, Switch} from 'react-router-dom';

export const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/chat'}>
                    <Chat/>
                </Route>
                <Route>
                    not found
                </Route>
            </Switch>
        </div>
    );
}