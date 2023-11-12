import React from 'react';

import * as S from './education-section.styles';

const EducationSection: React.FC = () => {
    return (
        <section className='resume-section' id='education'>
            <div className='resume-section-content'>
                <h2 data-aos='fade-right' className='mb-5'>
                    Educação
                </h2>
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
            </div>
        </section>
    );
};

export default EducationSection;
