import React from 'react';

import { Section } from '../Section';
import * as S from './education-section.styles';

const EducationSection: React.FC = () => {
    return (
        <Section title='Educação' id='education'>
            <div
                data-aos='fade-left'
                className='d-flex flex-column flex-md-row justify-content-between mb-5'
            >
                <div className='flex-grow-1'>
                    <h3 className='mb-0'>
                        Técnico em Informática para Internet
                    </h3>
                    <div className='subheading mb-3'>
                        Escola Estadual Salomé de Melo Rocha
                    </div>
                    <div>Concluído</div>
                </div>
                <div className='flex-shrink-0'>
                    <span className='text-primary'>2016</span>
                </div>
            </div>
            <div
                data-aos='fade-left'
                className='d-flex flex-column flex-md-row justify-content-between mb-5'
            >
                <div className='flex-grow-1'>
                    <h3 className='mb-0'>
                        Bacharelado em Engenharia de Software
                    </h3>
                    <div className='subheading mb-3'>
                        Universidade Federal do Mato Grosso do Sul
                    </div>
                    <div>Em andamento</div>
                </div>
                <div className='flex-shrink-0'>
                    <span className='text-primary'>2019</span>
                </div>
            </div>
        </Section>
    );
};

export default EducationSection;
