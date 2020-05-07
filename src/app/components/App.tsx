import React from 'react';
import './App.css';
import {Chat} from "../../chat/components/Chat";
import {Route, Switch} from 'react-router-dom';

export const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/chat'} component={Chat}/>
                <Route exact path={'/chat/:id'} render={(props) => (<Chat selectedChatId={props.match.params.id}/>)}/>
                {/*Вынести в HOC "доставание" и прописывание id чата в url*/}
                <Route>
                    not found
                </Route>
            </Switch>
        </div>
    );
};