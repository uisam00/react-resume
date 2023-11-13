/* eslint-disable max-len */
import { ExperienceLevel, ExperienceStatus } from '../enums';

export const EXPERIENCES = [
    {
        company: 'G2I',
        role: 'Desenvolvedor',
        level: ExperienceLevel.Internship,
        period: {
            status: ExperienceStatus.Finish,
            start: 'Maio 2021',
            end: 'Julho 2021',
        },
        resume: `
            Durante meu primeiro estágio em programação, tive a oportunidade de trabalhar com o framework CakePHP em um sistema de prontuário médico. Foi uma experiência enriquecedora, pois tive a oportunidade de aplicar meus conhecimentos teóricos em um ambiente de trabalho real e desenvolver minhas habilidades práticas.

            Como membro da equipe de desenvolvimento, trabalhei em estreita colaboração com outros desenvolvedores e equipes de suporte ao usuário para garantir que o sistema atendesse às necessidades específicas dos clientes. Além disso, colaborei na implementação de novas funcionalidades e correção de bugs no sistema, o que me permitiu adquirir habilidades em resolução de problemas e trabalho em equipe.

            Esse estágio me permitiu desenvolver habilidades valiosas em programação e me preparou para o próximo passo em minha carreira profissional. Aprendi sobre a importância da documentação e da comunicação eficaz, além de ter a oportunidade de aplicar meus conhecimentos em uma equipe de profissionais experientes.
        `,
    },

    {
        company: 'Nota Control',
        role: 'Desenvolvedor Full Stack Júnior',
        level: ExperienceLevel.Junior,
        period: {
            status: ExperienceStatus.Finish,
            start: 'Julho 2021',
            end: 'Dezembro 2021',
        },
        resume: `
          Em meu primeiro cargo como desenvolvedor full stack, tive a oportunidade de trabalhar em um sistema de geração de notas fiscais e gerenciamento de processos, ambos destinados a órgãos públicos. Foi onde desenvolvi minhas habilidades em .NET, Angular, ASP.NET MVC com Razor, jQuery e bancos de dados SQL Server e aprendi a para criar soluções eficientes e escaláveis.

          Durante meu tempo nesse cargo, trabalhei com a metodologia ágil SCRUM utilizando o TFS com tarefas bem definidas, o que me permitiu ter um melhor controle e visibilidade dos processos. Além disso, utilizei o GIT para versionamento de código, o que garantiu a qualidade e integridade dos desenvolvimentos.

          Aprendi sobre a manipulação de documentos em .NET e também sobre o Entity Framework, o que me permitiu desenvolver soluções mais robustas e eficientes. Além disso, fiquei sabendo da importância da integração entre as diferentes camadas de uma aplicação e da importância de se manter um código limpo e organizado.

          Essa primeira experiência profissional foi crucial para meu desenvolvimento como desenvolvedor full stack e me proporcionou uma base sólida de conhecimentos e habilidades que precisava para avançar em minha carreira.
        `,
    },

    {
        company: 'Stefanini Group',
        role: 'Analista Desenvolvedor',
        level: ExperienceLevel.MidLevel,
        period: {
            status: ExperienceStatus.Finish,
            start: 'Dezembro 2022',
            end: 'Maio 2022',
        },
        resume: `
          Durante minha jornada nessa empresa como desenvolvedor full stack, tive a oportunidade de trabalhar com a stack de tecnologias .NET, angular, Asp NET MVC com Razor e JQuery, bem como banco de dados SQL Server. Trabalhava dentro da metodologia ágil SCRUM usando TFS com tarefas bem definidas e utilizava o GIT e SVN para visionar código.

          Em meu primeiro projeto, fui responsável por desenvolver um sistema de gerenciamento de termos de compromissos e políticas de privacidade LGPD, que permitia aos órgãos públicos garantir a conformidade com as leis de privacidade. Além disso, também tive a chance de trabalhar com autenticação e permissões, tornando o sistema seguro e acessível somente para usuários autorizados.

          No segundo projeto, tive a oportunidade de aplicar minhas habilidades em modelagem de dados para criar a estrutura de banco de dados e a arquitetura de projeto do sistema. Esse projeto integrava vários subsistemas do cliente e era crucial para a operação efetiva da empresa. Ao trabalhar neste projeto, desenvolvi ainda mais minhas habilidades em .NET e no gerenciamento de banco de dados.

          Essas duas experiências foram valiosas para o meu crescimento como desenvolvedor e me permitiram adquirir habilidades que são altamente valorizadas no mercado de trabalho, como autenticação, modelagem de dados e integração de sistemas. Estou confiante de que essas habilidades serão extremamente úteis em meus futuros projetos e estou ansioso por continuar a crescer e aprender como desenvolvedor full stack.
        `,
    },
    {
        company: 'Intmed Software',
        role: 'Engenheiro de software',
        level: ExperienceLevel.MidLevel,
        period: {
            status: ExperienceStatus.Current,
            start: 'Maio 2022',
        },
        resume: `
          Como Engenheiro de Software, recentemente concluí minha participação em um projeto de login que envolveu a integração de diversos sistemas do cliente por meio de um eficiente Single Sign On. Atualmente, estou totalmente dedicado ao desenvolvimento de soluções inovadoras para a área de enfermagem em vários hospitais.

          Ao longo desse percurso, aprimorei minhas habilidades em tecnologias como React com styled-components e Context API, .NET, SQL Server, Angular e Python. Além disso, tive a oportunidade de aplicar reconhecimento facial diretamente no navegador do usuário, proporcionando uma abordagem eficiente e segura para autenticação biométrica.

          Desde o início do projeto, enfrentei desafios técnicos ao gerenciar permissões, integrar bancos de dados legados e implementar funcionalidades como login biométrico e gerenciamento de token JWT. Para lidar com a complexidade inicial do projeto, tomei a iniciativa de 'organizar a casa', implementando práticas de código limpo e padrões de projetos. Esse processo de refatoração gradual contribuiu significativamente para a manutenção sustentável do sistema, reduzindo a complexidade e facilitando futuras atualizações.

          No contexto ágil do SCRUM, gerencio o fluxo de trabalho no Azure, utilizando ferramentas como o GIT para o eficaz gerenciamento de código. Minha abordagem abrange desde o design até a implementação e integração de sistemas, garantindo soluções de alta qualidade para a área de enfermagem. Essa jornada tem ampliado meu conhecimento em tecnologias avançadas e fortalecido minha capacidade de enfrentar desafios técnicos, contribuindo assim para o sucesso contínuo do projeto.
        `,
    },
];
