export function getArrayOfParagraphsByLineBreak(string: string) {
    if (!string || typeof string !== 'string') return [];

    return string.split('\n');
}
