import React from 'react';
import {IChatPreview} from "../types/i-chat-preview";
import {ISingleMessage} from "../types/i-single-message";
import './Chat.css'
import {ChatList} from "./chat-list/ChatList";
import {MessagesList} from "./messages-list/MessagesList";
import {InputMain} from "./input-main/InputMain";
import {ChatApiStub, IChatApi} from '../api/MessagesApiStub';

interface IState {
    chats: IChatPreview[],
    selectedChatId: number | null; // if null or undefined then no chat is selected
    selectedChatMessages: ISingleMessage[]; // if null or undefined then no chat is selected
    isLoading: boolean;
}

interface IProps {
    /**
     * Выбранный "снаружи" chatId. Если null, то не выбрано
     */
    id: number | null

    /**
     * Выкидывание наружу выбранного chatId
     * @param id
     */
    idChangeHandler: (id: number) => void;
}

export class Chat extends React.Component<IProps, IState> {

    chatApi: IChatApi;

    constructor(props: IProps) {
        super(props);
        this.state = {
            chats: [],
            selectedChatMessages: [],
            selectedChatId: null,
            isLoading: false
        }

        this.chatApi = new ChatApiStub();

    }

    // вызывается только когда чат выбран юзером, а не пропихнулся "сверху"
    onChatSelected = (id: number) => {
        if (id === this.state.selectedChatId) {
            return;
        }

        this.tryInvokeIdChangeHandler(id);
        this.setState({selectedChatId: id})
        this.loadChatMessages(id);
    };

    loadChats = () => {
        return this.chatApi.getChats()
            .then(res => this.setState({chats: res}))
    }

    loadChatMessages = (id: number) => {
        this.setState({isLoading: true});

        this.chatApi.getChatMessages(id).then(
            res => this.setState({selectedChatMessages: res, isLoading: false})
        )
    }

    tryInvokeIdChangeHandler(id: number): void {
        if (this.props.idChangeHandler != null) {
            this.props.idChangeHandler(id);
        }
    }

    sendMessage = (chatId: number, messageText: string) => {
        this.chatApi.sendMessage(chatId, messageText, 3, 'some user').then(
            _ => Promise.all([this.chatApi.getChatMessages(chatId), this.chatApi.getChats()])
        ).then(
            res => this.setState({selectedChatMessages: res[0], chats: res[1]})
        )
    }

    onMessageSentHandler = (messageText: string) => {
        if (this.state.selectedChatId == null) {
            return;
        }

        this.sendMessage(this.state.selectedChatId, messageText);
    }

    componentDidMount(): void {
        this.loadChats();
        if (this.props.id != null) {
            this.setState((state, props) => ({selectedChatId: props.id}))
            this.loadChatMessages(this.props.id)
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (this.props.id != null && prevProps.id !== this.props.id) {
            this.setState((state, props) => ({selectedChatId: props.id}))
            this.loadChatMessages(this.props.id)
        }
    }

    render() {
        return <div className="chat-window">
            <ChatList chatPreviews={this.state.chats}
                      selectedChatId={this.state.selectedChatId}
                      onChatSelected={this.onChatSelected}/>
            <div className="messages-list-and-input-container">
                <div className="messages-list-container-wrapper">
                    {this.state.isLoading
                        ? 'ЗАГРУЗКА'
                        : <MessagesList messages={this.state.selectedChatMessages}/>
                    }
                </div>
                <InputMain onMessageSent={this.onMessageSentHandler}/>
            </div>
        </div>
    }
}