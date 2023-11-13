import { EducationStatus } from '../enums/education.enum';

export const EDUCATION_ITEMS = [
    {
        course: 'Técnico em Informática para Internet',
        institution: 'Escola Estadual Salomé de Melo Rocha',
        city: 'Guia Lopes da Laguna - MS',
        period: {
            start: '2016',
            end: '2017',
            status: EducationStatus.Completed,
        },
    },
    {
        course: 'Bacharelado em Engenharia de Software',
        institution: 'Universidade Federal do Mato Grosso do Sul',
        city: 'Campo Grande - MS',
        period: {
            start: '2019',
            end: '2022',
            status: EducationStatus.Discontinued,
        },
    },
    {
        course: 'Ciência da Computação',
        institution: 'Universidade Estácio de Sá',
        city: 'Pouso Alegre - MG',
        period: {
            start: '2023',

            status: EducationStatus.InProgress,
        },
    },
];
