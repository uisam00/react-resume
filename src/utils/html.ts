export function replaceNonMatchingAttributes(inputString, newColor) {
    // Set of colors that should not be replaced
    const ignoredColors = new Set([
        '#fff',
        '#ffffff',
        '#FFFFFF',
        '#FFF',
        'white',
        'none',
    ]);

    // Regular expression to match specific patterns in the string
    const pattern =
        /(fill\s*=\s*["']#(?:[0-9a-fA-F]{3}){1,2}["']|fill\s*:\s*#(?:[0-9a-fA-F]{3}){1,2}(?=["'\s;])|stroke\s*=\s*["']#(?:[0-9a-fA-F]{3}){1,2}["']|stroke\s*:\s*#(?:[0-9a-fA-F]{3}){1,2}(?=["'\s;])|fill\s*=\s*["'](?:#[0-9a-fA-F]+)?["']|fill\s*:\s*(?:#[0-9a-fA-F]+)?(?=["'\s;])|stroke\s*=\s*["'](?:#[0-9a-fA-F]+)?["']|stroke\s*:\s*(?:#[0-9a-fA-F]+)?(?=["'\s;]))/g;

    // Replacement function
    function replace(match) {
        const matchResult = match?.match(/#(?:[0-9a-fA-F]{3}){1,2}/);
        const originalColor = matchResult && matchResult[0];
        console.log(originalColor);

        // Replace only if the original color is not in the list of ignored colors
        if (!ignoredColors.has(originalColor?.toLowerCase())) {
            return match?.replace(originalColor, newColor);
        }
        return match;
    }

    // Apply the replacement on the string using the defined function
    const newString = inputString?.replace(pattern, replace);

    return newString;
}
