/**
 * Возвращает первый элемент с максимальным ключом
 * @param arr Массив элементов
 * @param keySelector Селектор ключей
 * @param compareFn Функция сравнения вида b-a
 */
export function maxBy<TData, TKey>(arr: TData[], keySelector: (item: TData) => TKey,
                                   compareFn: ((a: TKey, b: TKey) => number)): TData {
    if (arr.length === 0) {
        throw new Error('Expected non-empty array')
    }
    let currMax = arr[0];
    let currMaxKey = keySelector(currMax);
    for (let i = 1; i < arr.length; ++i) {
        const currKey = keySelector(arr[i]);
        if (compareFn(currKey, currMaxKey) > 0) {
            currMax = arr[i];
            currMaxKey = currKey;
        }
    }

    return currMax;
}