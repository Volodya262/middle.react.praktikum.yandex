import {IMessage} from "./i-message";

export interface IChatMessages {
    /**
     * id чата, которому принадлежат сообщения
     */
    chatId: number;

    /**
     * Сообщения этого чата
     */
    messages: IMessage[];
}