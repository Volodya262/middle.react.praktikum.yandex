import * as React from 'react';
import {IMessage} from "../../../model/i-message";
import {format} from "date-fns";
import MessageItem from "./MessageItem";

interface IProps {
    date: Date;
    messages: IMessage[]
}

const MessagesGroup: React.FunctionComponent<IProps> = (props: IProps) => (
    <div>
        <div className="date">{format(props.date, 'dd.MM.yyyy')}</div>
        {props.messages.map(msg => (<MessageItem {...msg}/>))}
    </div>
);

export default MessagesGroup;