import React from 'react'
import './MessageItem.css'
import {format} from "date-fns";
import {IUserMessagesGroupMessage} from "../../types/i-user-messages-group-message";

export const MessageItem: React.FunctionComponent<IUserMessagesGroupMessage> = ({date, message}) => {

    const formattedTime = format(date, 'HH:mm'); // HH - 24h format

    return (
        <div className="message-user-group__message-row">
            <div className="message-user-group__message-text">{message}</div>
            <div>{formattedTime}</div>
        </div>
    );
}