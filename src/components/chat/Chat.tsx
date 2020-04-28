import * as React from "react";
import {IChatPreview} from "../../model/i-chat-preview";
import ChatList from "./chat-list/ChatList";
import {IChatMessages} from "../../model/i-chat-messages";
import {IMessage} from "../../model/i-message";
import MessageList from "./messages-list/MessagesList";
import './Chat.css'

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const chats: IChatPreview[] = [
    {
        id: 1,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vova22',
        date: new Date(),
        message: 'здесь был Вова',
        title: 'чатик с Вовой'
    },
    {
        id: 2,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vova34',
        date: new Date(),
        message: 'здесь был Вова',
        title: 'чатик с Вовой'
    },
    {
        id: 3,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(2020, 0, 1),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 4,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(2020, 0, 2),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 5,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(2020, 1, 2),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 6,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 7,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 8,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 9,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(),
        message: ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 10,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(),
        message: ipsum,
        title: 'чатик с Вовой'
    }
]

const chatMessages: IChatMessages[] = [
    {
        chatId: 1,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1),
                message: 'олды тут...',
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
    {
        chatId: 2,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1, 12),
                message: 'всем привет!',
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 13),
                message: 'Привет!!!!',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 14),
                message: 'Как дела?????',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 16),
                message: 'ау??????',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 2, 12),
                message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
    {
        chatId: 3,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1),
                message: 'раз',
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 3),
                message: 'три',
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 2),
                message: 'два',
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
]

function getChatMessages(chatId: number): IMessage[] { // как будто сходили на бэк лел
    const res = chatMessages.find(msgs => msgs.chatId === chatId);
    return res != null ? res.messages : [];
}

interface IProps {

}

interface IState {
    chats: IChatPreview[],
    selectedChatId?: number; // if null then no chat is selected
    selectedChatMessages?: IMessage[]; // if null then no chat is selected
}

class Chat extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            chats: chats
        }
    }

    onChatSelected = (id: number) => {
        const messages = getChatMessages(id);
        const newState = {...this.state, selectedChatId: id, selectedChatMessages: messages}
        this.setState(newState);
    };

    render(): React.ReactNode {
        return (
            <div className="chat-window">
                <ChatList chatPreviews={this.state.chats}
                          selectedChatId={this.state.selectedChatId}
                          onChatSelected={this.onChatSelected}/>
                <MessageList messages={this.state.selectedChatMessages}/>
            </div>
        )
    }
}

export default Chat;