import * as React from 'react';
import {IMessage} from "../../../model/i-message";
import './MessagesList.css'
import _ from "lodash";
import {startOfDay} from "date-fns";
import MessagesGroup from "./MessagesGroup";

interface IProps {
    messages?: IMessage[];
}

const MessageList: React.FunctionComponent<IProps> = (props: IProps) => {
    const grouppedMessages = _(props.messages)
        .groupBy(msg => startOfDay(msg.date).getTime())
        .map((value, key) => ({date: Number(key), messages: value}))
        .sortBy(e => e.date)
        .map(group => ({date: new Date(group.date), messages: group.messages}))
        .value();

    return (
        <div className="messages-list-container">
            {grouppedMessages.map(group => (
                <MessagesGroup key={group.date.getTime()} date={group.date} messages={group.messages}/>))}
        </div>)
}

export default MessageList;