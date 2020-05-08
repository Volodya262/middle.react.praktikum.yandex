import React from 'react'
import {ISingleMessage} from "../../types/i-single-message";
import './MessagesList.css'
import {startOfDay} from "date-fns";
import {groupByAsArray} from "../../../common/utils/group-by-as-array";
import {sortBy} from "../../../common/utils/sort-by";
import {MessagesDayGroup} from "../messages-day-group/MessagesDayGroup";

interface IProps {
    messages?: ISingleMessage[];
}

export const MessagesList: React.FunctionComponent<IProps> = ({messages}) => {

    const groupedMessagesArray = groupByAsArray(messages || [], msg => startOfDay(msg.date).getTime());
    const groupedSortedMessages = sortBy(groupedMessagesArray, group => group.key, (a, b) => a - b)
        .map(group => ({date: new Date(group.key), messages: group.items}));

    return (
        <div className="messages-list-container">
            {groupedSortedMessages.map(group => (
                <MessagesDayGroup key={group.date.getTime()} date={group.date} messages={group.messages}/>))}
        </div>)
}