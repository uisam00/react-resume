export function removeXmlHeader(svgString: string) {
    if (!svgString || typeof svgString !== 'string') return;

    const svgWithoutXml = svgString.replace(/<\?xml.*?\?>/, '');
    const svgWithoutComments = svgWithoutXml.replace(/<!--.*?-->/g, '');
    // eslint-disable-next-line consistent-return
    return svgWithoutComments?.trim();
}
