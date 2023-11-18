import React from 'react';

import { Section } from '../Section';
import * as S from './about-section.styles';

const About: React.FC = () => {
    return (
        <S.SectionContainer id='about'>
            <S.SectionContent>
                <h1 className='mb-0'>
                    <span className='mr-0'>Ui Sam</span>
                    <span className='text-primary'> Dos Santos</span>
                </h1>
                <div className='subheading mb-5'>
                    <a target='_blank' rel='noreferrer'>
                        (67) 99893-3115
                    </a>{' '}
                    <a href='mailto:uisam.santos@gmail.com'>
                        uisam.santos@gmail.com
                    </a>
                </div>
                <p className='lead mb-3'>Olá!</p>
                <p className='lead mb-3'>
                    Sou um desenvolvedor Full Stack com ampla experiência em
                    tecnologias como .NET, Angular, React, Flutter, SQL Server,
                    Docker e Azure. Com forte habilidade em resolução de
                    problemas e desenvolvimento de soluções escaláveis e
                    eficientes, tenho trabalhado em projetos complexos que
                    exigem uma combinação de habilidades técnicas e de
                    comunicação eficaz.
                </p>
                <p className='lead mb-3'>
                    Com uma paixão por aprender e aplicar novas tecnologias,
                    tenho sempre buscado manter-me atualizado e aprimorar minhas
                    habilidades, o que me permitiu alcançar resultados
                    surpreendentes em projetos de diversos setores. Além disso,
                    tenho uma abordagem colaborativa e flexível ao trabalho em
                    equipe, o que me permite trabalhar de forma efetiva com
                    colegas de diversos departamentos e culturas.
                </p>

                <p className='lead mb-5'>
                    Acredito que minha experiência e habilidades são uma
                    excelente adição para qualquer equipe de desenvolvimento de
                    software. Estou ansioso para aplicar meus conhecimentos e
                    habilidades em um novo desafio e contribuir para o sucesso
                    de sua empresa. Obrigado por considerar meu candidatura.
                </p>
                <div className='social-icons'>
                    <a
                        target='_blank'
                        className='social-icon'
                        href='https://www.linkedin.com/in/uisam00/'
                        rel='noreferrer'
                    >
                        <i className='fab fa-linkedin-in' />
                    </a>
                    <a
                        target='_blank'
                        className='social-icon'
                        href='https://github.com/uisam00'
                        rel='noreferrer'
                    >
                        <i className='fab fa-github' />
                    </a>
                </div>
            </S.SectionContent>
        </S.SectionContainer>
    );
};

export default About;
