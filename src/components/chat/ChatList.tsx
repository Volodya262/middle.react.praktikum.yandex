import * as React from "react";
import {IChatPreview} from "../../model/i-chat-preview";
import ChatItem from "./ChatItem";
import "./ChatList.css"

interface IProps {
    chatPreviews: IChatPreview[]
}


const ChatList: React.FunctionComponent<IProps> = (props: IProps) => (
    <div className="chat-container" style={{width: 400, height: 300}}>
        {props.chatPreviews
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map(preview => (
                <ChatItem key={preview.id} chatPreview={preview}/>
            ))}
    </div>
);

export default ChatList;