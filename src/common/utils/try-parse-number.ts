/**
 * Пытается спарсить Number. Если получается NaN, то возвращает null
 * @param src
 */
export function tryParseNumber(src: number | string): number | null {
    if (typeof src === "number") {
        return src;
    }

    try {
        if (src != null) {
            const res = Number(src);
            return isNaN(res) ? null : res;
        }
    } catch {
        return null;
    }

    return null;
}