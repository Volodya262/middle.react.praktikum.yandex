/**
 * Группировка данных по ключу. Ключ сравниваются через ===. Возвращает js Map.
 * @param arr Данные
 * @param keySelector Селектор ключа
 */
export function groupBy<TData, TKey>(arr: TData[], keySelector: (item: TData) => TKey): Map<TKey, TData[]> {
    const groups = new Map<TKey, TData[]>();

    for (const item of arr) {
        const key = keySelector(item);
        if (groups.has(key)) {
            const groupItem = groups.get(key);
            if (groupItem == null) {
                throw new Error('Unexpected error occured');
            }
            groupItem.push(item);
        } else {
            groups.set(key, [item]);
        }
    }

    return groups;
}