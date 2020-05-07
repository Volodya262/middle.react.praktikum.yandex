import React from 'react';
import './App.css';
import {Chat} from "../../chat/components/Chat";
import {Route, Switch} from 'react-router-dom';
import {withIdUrlBinding} from "../../chat/HOCs/withIdUrlBinding";

const ChatWithIdUrlBinding = withIdUrlBinding(Chat);

export const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <Switch>
                <Route path={'/chat'} component={ChatWithIdUrlBinding}/>
                <Route>
                    not found
                </Route>
            </Switch>
        </div>
    );
};