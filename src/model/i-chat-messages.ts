import {IMessage} from "./i-message";

// Если это не модель, то что это? Куда класть типы? В src/types? Чем types отличаются от model?
// Речь идет о разделении контрактов на Application и Business уровни?
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