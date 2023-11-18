import React, { useRef, useEffect } from 'react';

import { ContainerProps } from './powerful-container.component types';
import * as S from './powerful-container.component.styles';

const PowerfulContainer: React.FC<ContainerProps> = ({
    classToChildren,
    children,
    ...divProps
}) => {
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
    }, [children, classToChildren]);

    return (
        <S.Container {...divProps} ref={containerRef}>
            {children}
        </S.Container>
    );
};

export default PowerfulContainer;
