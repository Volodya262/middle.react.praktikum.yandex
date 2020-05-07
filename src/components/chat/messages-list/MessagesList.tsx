import React from 'react'
import {IMessage} from "../../../types/i-message";
import './MessagesList.css'
import {startOfDay} from "date-fns";
import {groupByAsArray} from "../../../utils/group-by-as-array";
import {sortBy} from "../../../utils/sort-by";
import {MessagesGroup} from "../messages-group/MessagesGroup";

interface IProps {
    messages?: IMessage[];
}

export const MessageList: React.FunctionComponent<IProps> = ({messages}) => {

    const groupedMessagesArray = groupByAsArray(messages || [], msg => startOfDay(msg.date).getTime());
    const groupedSortedMessages = sortBy(groupedMessagesArray, group => group.key, (a, b) => a - b)
        .map(group => ({date: new Date(group.key), messages: group.items}));

    return (
        <div className="messages-list-container">
            {groupedSortedMessages.map(group => (
                <MessagesGroup key={group.date.getTime()} date={group.date} messages={group.messages}/>))}
        </div>)
}