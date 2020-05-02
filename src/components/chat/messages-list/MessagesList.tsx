import React from 'react'
import {IMessage} from "../../../model/i-message";
import './MessagesList.css'
import {startOfDay} from "date-fns";
import MessagesGroup from "../messages-group/MessagesGroup";
import {groupByAsArray} from "../../../utils/group-by-as-array";
import {sortBy} from "../../../utils/sort-by";

interface IProps {
    messages?: IMessage[];
}

const MessageList: React.FunctionComponent<IProps> = ({messages}) => {

    const grouppedMessagesArray = groupByAsArray(messages || [], msg => startOfDay(msg.date).getTime());
    const grouppedMessages = sortBy(grouppedMessagesArray, group => group.key, (a, b) => a - b)
        .map(group => ({date: new Date(group.key), messages: group.items}));

    return (
        <div className="messages-list-container">
            {grouppedMessages.map(group => (
                <MessagesGroup key={group.date.getTime()} date={group.date} messages={group.messages}/>))}
        </div>)
}

export default MessageList;