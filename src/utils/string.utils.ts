export function getArrayOfParagraphsByLineBreak(string: string) {
    if (!string || typeof string !== 'string') return [];

    return string.split('\n');
}

export function removePhoneMack(phone: string) {
    if (!phone || typeof phone !== 'string') return '';

    return phone.replace(/[+()\s-]/g, '');
}
