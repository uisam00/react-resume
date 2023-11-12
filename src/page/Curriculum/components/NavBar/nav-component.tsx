import React from 'react';

import { NavBarProps } from '.';
import * as S from './nav-styles';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <S.NavContainer {...props}>
            <a className='navbar-brand js-scroll-trigger' href='#page-top'>
                <span className='d-block d-lg-none'>Ui Sam Dos Santos</span>
                <span className='d-none d-lg-block'>
                    <img
                        className='img-fluid img-profile rounded-circle mx-auto mb-2'
                        src='../../../../../public/profile.jpeg'
                        alt='Foto de Ui Sam dos Santos no Museu do Ipiranga'
                    />
                </span>
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link js-scroll-trigger' href='#about'>
                            Sobre
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link js-scroll-trigger'
                            href='#experience'
                        >
                            Experiências
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link js-scroll-trigger'
                            href='#education'
                        >
                            Educação
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link js-scroll-trigger'
                            href='#skills'
                        >
                            Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link js-scroll-trigger'
                            href='#interests'
                        >
                            Interesses
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link js-scroll-trigger'
                            href='#awards'
                        >
                            Certificados
                        </a>
                    </li>
                </ul>
            </div>
        </S.NavContainer>
    );
};

export default NavBar;
