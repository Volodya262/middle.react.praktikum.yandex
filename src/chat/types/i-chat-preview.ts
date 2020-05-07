/**
 * Превьюха чата в окне выбора чатов
 */
export interface IChatPreview {
    id: number;
    logoUrl: string;
    title: string;
    author: string;
    message: string;
    date: Date;
}