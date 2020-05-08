/**
 * Список сообщений, отправленных пользователем подряд
 */
import {IUserMessagesGroupUser} from "./i-user-messages-group-user";
import {IUserMessagesGroupMessage} from "./i-user-messages-group-message";

export interface IUserMessagesGroup {
    /**
     * Информация о пользователе (имя, аватарка, id)
     */
    user: IUserMessagesGroupUser,
    /**
     * Список сообщений
     */
    messages: IUserMessagesGroupMessage[]
}