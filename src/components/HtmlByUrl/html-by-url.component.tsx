import React, { useRef, useEffect } from 'react';

import { SvgByUrlProps } from '.';
import { useGetHtmlByUrlQuery } from '../../hooks/queries/GET/useGetHtmlByUrlQuery';
import * as S from './html-by-url.component styles';

const HtmlByUrl: React.FC<SvgByUrlProps> = ({
    src,
    classToChildren,
    handleHtmlString,
    ...divProps
}) => {
    const { html, isFetchedHtml } = useGetHtmlByUrlQuery({
        url: src,
    });

    const containerRef = useRef(null);

    const handledHtml = (htmlString: string) => {
        if (!htmlString || typeof htmlString !== 'string') return '';

        return handleHtmlString ? handleHtmlString(html) : html;
    };

    useEffect(() => {
        if (!html || !classToChildren || typeof classToChildren !== 'string')
            return;
        // Adiciona a classe ao primeiro filho do container após a renderização
        if (containerRef.current) {
            const { firstChild } = containerRef.current;
            if (firstChild) {
                const classesArray = classToChildren.split(' ');
                firstChild.classList?.add(...classesArray);
            }
        }
    }, [html, classToChildren]);

    return (
        <S.DivForHTML
            {...divProps}
            ref={containerRef}
            dangerouslySetInnerHTML={{
                __html: handledHtml(html),
            }}
        />
    );
};

export default HtmlByUrl;
