export interface SvgByUrlProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    classToChildren?: string;
    handleHtmlString?: (html: string) => string;
}
