export default function stringToIndex(str: string, size: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0
    }
    return hash % size
}