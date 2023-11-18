/* eslint-disable max-len */
import { Icon } from '../components/Icon';
import * as I from '../components/Icons';

export const SKILL_GROUP_MOCK = [
    {
        type: 'Hard Skills',
        skills: [
            {
                name: 'HTML, CSS e Javascript',
                icon: [
                    <Icon iconType='fab' iconName='html5' />,
                    <Icon iconType='fab' iconName='css3-alt' />,

                    <Icon iconType='fab' iconName='js-square' />,
                ],
            },
            {
                name: 'Typescript',
                icon: <I.TypeScriptIcon />,
            },
            {
                name: 'Angular',
                icon: <Icon iconType='fab' iconName='angular' />,
            },
            {
                name: 'React',
                icon: <Icon iconType='fab' iconName='react' />,
            },
            {
                name: '.NET Core',
                icon: <I.DotNetIcon />,
            },
            {
                name: 'Docker',
                icon: <Icon iconType='fab' iconName='docker' />,
            },
            {
                name: 'SQL, Microsoft SQL Server',
                icon: [
                    <Icon iconType='fas' iconName='database' />,
                    <I.SqlServerIcon />,
                ],
            },
        ],
    },
    {
        type: 'Soft Skills',
        skills: [
            {
                name: 'Comunicação eficaz',
                icon: <I.CommunicationIcon />,
            },
            {
                name: 'Trabalho em equipe',
                icon: <I.TeamWorkIcon />,
            },
            {
                name: 'Resolução de problemas',
                icon: <I.ProblemResolutionIcon />,
            },
            {
                name: 'Flexibilidade',
                icon: <I.FlexibilityIcon />,
            },
            {
                name: 'Foco em qualidade',
                icon: <Icon iconType='fas' iconName='award' />,
            },
            {
                name: 'Aprendizado rápido',
                icon: <Icon iconType='fas' iconName='book-open' />,
            },
        ],
    },
];
