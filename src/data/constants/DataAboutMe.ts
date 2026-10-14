import { AboutMeModel } from "../models/AboutMeModel";

export const DataAboutMe: AboutMeModel[] = [
    {
        id: 1,
        img: {
            name: 'Mão',
            path: '/hand.png',
        },
        title: 'Introdução',
        description:
            'Estou nessa jornada desde os 16 anos. Hoje, transformo problemas reais em soluções completas, do planejamento da arquitetura ao deploy.',
    },
    {
        id: 2,
        img: {
            name: 'Computador',
            path: '/computer.png',
        },
        title: 'Minha experiência',
        description:
            'Sou Engenheiro de Software com mais de 3 anos de experiência em desenvolvimento web, já passei por uma startup e por órgãos públicos do Maranhão e de São Luís, entregando portais, automações e novas funcionalidades com foco em escalabilidade, segurança e performance. Trabalho com Next.js, React, NestJS, Node.js e TypeScript, e uso PostgreSQL, MySQL, Docker, Git e práticas de CI/CD no dia a dia. Curso Engenharia de Software na UNDB (conclusão em 2027) e sou certificado em CS50x e NGINX.',
    },
    {
        id: 3,
        img: {
            name: 'Target',
            path: '/target.png',
        },
        title: 'Objetivos',
        description:
            'Aprofundar meus conhecimentos em arquitetura de software e DevOps para projetar sistemas escaláveis, seguros e fáceis de manter, e usar a tecnologia para resolver problemas que impactem de verdade a vida das pessoas.',
    },
]
