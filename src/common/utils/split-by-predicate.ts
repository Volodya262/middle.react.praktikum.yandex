/**
 * Делит массив на массив массивов в соответствии с предикатом.
 * Например, можно разделить [1,2,3,-1,2,2,-1] на [1,2,3],[-1,2,2],[-1] если предикат currEl => currEl === -1
 * ИЛИ
 * [1,2,3,5,10,11,12,14] на [[1,2,3],[5],[10,11,12],[14]] если предикат (currEl, prevEl) => Math.abs(prevEl - currEl) > 1
 * @param arr Исходный массив
 * @param splitPredicate Предикат разделения. Если выполняется, то текущий элемент будет положен в следующую коллекцию.
 */
export function splitByPredicate<TData>(arr: TData[], splitPredicate: (currEl: TData, prevEl: TData) => boolean): TData[][] {
    if (arr.length === 0) {
        return [];
    }

    let currGroup = [arr[0]];
    const res = [currGroup];
    for (let i = 1; i < arr.length; ++i) {
        if (splitPredicate(arr[i], arr[i - 1])) {
            currGroup = [arr[i]];
            res.push(currGroup);
        } else {
            currGroup.push(arr[i]);
        }
    }

    return res;
}