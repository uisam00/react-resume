import React from 'react';

import { Section } from '../Section';
import * as S from './awards-section.styles';

const AwardsSection: React.FC = () => {
    return (
        <Section title='Certificados' id='awards'>
            <ul data-aos='fade-left' className='fa-ul mb-0'>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    NLW#4 - RocktSeat
                </li>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    Domine Web, 14 Cursos + Projetos, Javascript, Angular,
                    React, Vue, Node, HTML, CSS, jQuery, Bootstrap Webpack Gulp
                    MySQL - Cod3r Cursos
                </li>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    Criação de Apps Android e iOS com Flutter / Crie 16 Apps -
                    Flutter - Brasil | Oficial
                </li>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    Implementando Banco De Dados | Fundação Bradesco
                </li>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    Angular 9 Essencial | COD3R
                </li>
                <li>
                    <span className='fa-li'>
                        <i className='fas fa-trophy text-warning' />
                    </span>
                    O curso completo de Banco de dados e SQL, sem mistérios! |
                    Instrutor Felipe Mafra | Udemy
                </li>
            </ul>
        </Section>
    );
};

export default AwardsSection;
