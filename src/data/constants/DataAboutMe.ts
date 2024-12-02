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
            'Estou nessa jornada deis dos meus 16 anos. Hoje, transformo ideias em soluções completas e funcionais',
    },
    {
        id: 2,
        img: {
            name: 'Computador',
            path: '/computer.png',
        },
        title: 'Minha experiência',
        description:
            'Com mais de 1 ano de experiência em desenvolvimento web, atuo como desenvolvedor fullstack, criando aplicações performáticas e atraentes. No frontend, utilizo React e Next.js, enquanto no backend, trabalho com Spring Boot e Laravel.',
    },
    {
        id: 3,
        img: {
            name: 'Target',
            path: '/target.png',
        },
        title: 'Objetivos',
        description:
            'Continuar aprendendo e explorando novas tecnologias e ferramentas, buscando constantemente o aprimoramento profissional para construir uma carreira de sucesso, impactante e repleta de realizações.',
    },
]