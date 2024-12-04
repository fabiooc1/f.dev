import { ProjectModel } from '../models/ProjectModel'

import feedImage from '../../assets/feed.png'
import IgniteTimeImage from '../../assets/ignite-timer.png'
import DTMoneyImage from '../../assets/dt-money.png'
import CoffeDeliveryImage from '../../assets/coffe-delivery.png'
import TasksChallengeImage from '../../assets/tasks-challenge.png'

export const DataProjects: ProjectModel[] = [
    {
        id: 1,
        name: 'Feed',
        description: 'Uma mini rede social interativa que permite aos usuários criar postagens e adicionar comentários, promovendo engajamento e troca de ideias.',
        img: {
            name: 'Feed',
            path: feedImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/feed',
        productionUrl: null
    },
    {
        id: 2,
        name: 'Tasks Challenge',
        description: 'Aplicação frontend desenvolvida para um desafio técnico, focada na gestão de tarefas. Inclui funcionalidades como cadastro de nome, preço, data de expiração com integração com banco de dados.',
        img: {
            name: 'Tasks Challenge',
            path: TasksChallengeImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/tasks-challenge-frontend',
        productionUrl: null
    },
    {
        id: 3,
        name: 'Ignite Timer',
        description: 'Ferramenta prática de gerenciamento de tempo, projetada para ajudar na realização de tarefas. Inclui funcionalidades como temporizador personalizável e histórico de sessões.',
        img: {
            name: 'Ignite Timer',
            path: IgniteTimeImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/02-ignite-timer',
        productionUrl: null
    },
    {
        id: 4,
        name: 'DT Money',
        description: 'Aplicação web intuitiva para o gerenciamento de finanças pessoais, permitindo o registro, categorização e análise de receitas e despesas.',
        img: {
            name: 'DT Money',
            path: DTMoneyImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/03-dt-money',
        productionUrl: null
    },
    {
        id: 5,
        name: 'Coffee Delivery',
        description: 'Mini E-commerce para cafeterias, destacando a exibição de produtos com informações detalhadas e possibilitando a realização de pedidos online de forma prática.',
        img: {
            name: 'Coffee Delivery',
            path: CoffeDeliveryImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/coffee-delivery',
        productionUrl: null
    }
];

