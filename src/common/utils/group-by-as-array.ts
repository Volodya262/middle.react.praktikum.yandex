import {groupBy} from "./group-by";

export interface Group<TData, TKey> {
    key: TKey,
    items: TData[]
}

/**
 * Группировка данных по ключу. Ключ сравниваются через ===. Возвращает массив объектов {ключ, значения}.
 * @param arr Данные
 * @param keySelector Селектор ключа
 */
export function groupByAsArray<TData, TKey>(arr: TData[], keySelector: (item: TData) => TKey): Group<TData, TKey>[] {
    const map = groupBy(arr, keySelector);
    const res: Group<TData, TKey>[] = [];
    map.forEach((values, key) => res.push({key: key, items: values}));
    return res;
}