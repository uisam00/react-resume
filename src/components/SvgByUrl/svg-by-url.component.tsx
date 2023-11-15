import React, { useRef, useEffect } from 'react';

import { SvgByUrlProps } from '.';
import { useGetHtmlByUrlQuery } from '../../hooks/queries/GET/useGetHtmlByUrlQuery';
import * as S from './svg-by-url.component styles';

const SvgByUrl: React.FC<SvgByUrlProps> = ({
    src,
    classToChildren,
    ...divProps
}) => {
    const { html, isFetchedHtml } = useGetHtmlByUrlQuery({
        url: src,
    });

    const containerRef = useRef(null);

    useEffect(() => {
        if (!classToChildren || typeof classToChildren !== 'string') return;
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
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default SvgByUrl;
