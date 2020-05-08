import React from 'react'
import {IUserMessagesGroupUser} from "../../types/i-user-messages-group-user";
import {IUserMessagesGroupMessage} from "../../types/i-user-messages-group-message";
import './MessagesUserGroup.css'
import {MessageItem} from "../message-item/MessageItem";

interface IProps {
    user: IUserMessagesGroupUser;
    messages: IUserMessagesGroupMessage[];
}

export const MessagesUserGroup: React.FC<IProps> = ({messages, user}) => {

    return (
        <div className="message-user-group">
            <img src={user.avatarUrl} className="message-user-group__avatar" alt="user avatar"/>
            <div className="message-user-group__all-text-container">
                <div className="message-user-group__author-container">
                    <span className="message-user-group__author">{user.authorName}</span>
                </div>
                <div className="message-user-group__messages-container">
                    {messages.map(msg => <MessageItem message={msg.message} date={msg.date}/>)}
                </div>
            </div>
        </div>
    );
}