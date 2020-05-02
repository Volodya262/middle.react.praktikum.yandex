import React from 'react'
import {IMessage} from "../../../model/i-message";
import {format} from "date-fns";
import MessageItem from "../message-item/MessageItem";

interface IProps {
    date: Date;
    messages: IMessage[]
}

const MessagesGroup: React.FunctionComponent<IProps> = ({date, messages}) => (
    <div>
        <div className="date">{format(date, 'dd.MM.yyyy')}</div>
        {messages.map(msg => (<MessageItem {...msg}/>))}
    </div>
);

export default MessagesGroup;