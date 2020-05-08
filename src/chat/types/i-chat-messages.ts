import {ISingleMessage} from "./i-single-message";

// Если это не модель, то что это? Куда класть типы? В src/types? Чем types отличаются от types?
// Речь идет о разделении контрактов на Application и Business уровни?
export interface IChatMessages {
    /**
     * id чата, которому принадлежат сообщения
     */
    chatId: number;

    /**
     * Сообщения этого чата
     */
    messages: ISingleMessage[];
}