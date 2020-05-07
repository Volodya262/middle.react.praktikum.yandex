/**
 * Сортировка массива объектов по ключу
 * @param arr Массив
 * @param keySelector Селектор ключа
 * @param compareFn Функция сравнения ключей
 */
export function sortBy<TData, TKey>(arr: TData[],
                                    keySelector: (item: TData) => TKey,
                                    compareFn?: ((a: TKey, b: TKey) => number)): TData[] {
    // не паримся за сложность алгоритма, надеемся на маленькие объемы С=
    const res: TData[] = [];
    const sortedKeys = arr.map(keySelector).sort(compareFn);
    for (const key of sortedKeys) {
        const items = arr.find(item => keySelector(item) === key);
        if (items == null) {
            throw new Error('Unexpected error occured');
        }
        res.push(items);
    }

    return res;
}