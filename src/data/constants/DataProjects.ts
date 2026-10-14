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
        description: 'Mini rede social em que os usuários criam postagens e comentam nas publicações de outros, promovendo engajamento e troca de ideias.',
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
        description: 'Frontend desenvolvido para um desafio técnico de gestão de tarefas, com cadastro de nome, preço e data de expiração e integração com uma API.',
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
        description: 'Timer de produtividade para focar em tarefas, com temporizador personalizável e histórico de sessões.',
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
        description: 'Aplicação web para controle de finanças pessoais, com registro, categorização e análise de receitas e despesas.',
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
        description: 'Mini e-commerce para cafeterias, com catálogo de produtos detalhado e fluxo de pedido online.',
        img: {
            name: 'Coffee Delivery',
            path: CoffeDeliveryImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/coffee-delivery',
        productionUrl: null
    }
];

