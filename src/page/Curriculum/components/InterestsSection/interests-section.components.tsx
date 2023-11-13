import React from 'react';

import { Section } from '../Section';
import * as S from './interests-section.styles';

const InterestsSection: React.FC = () => {
    return (
        <Section title='Interesses' id='interests'>
            <p data-aos='fade-left'>
                Meu principal interesse atualmente é desenvolver uma carreira
                sólida e sustentável, onde eu possa estar contribuindo para o
                desenvolvimento de algum setor da sociedade.
            </p>
            <p data-aos='fade-left'>
                Além da programação, tenho interesse em tecnologia em geral e
                gosto de estar sempre atualizado sobre as últimas tendências e
                inovações. Também sou apaixonado por viagens e explorar novas
                culturas, o que me permite ampliar minha perspectiva e
                enriquecer minha vida pessoal. Além disso, gosto de ficar ao ar
                livre curtindo a natureza. Nos tempos vagos, prezo pela prática
                de esportes para manter meu corpo saudável, também adoro curtir
                uma viagem.
            </p>
        </Section>
    );
};

export default InterestsSection;
