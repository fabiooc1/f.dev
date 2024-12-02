import { ProjectModel } from '../models/ProjectModel'

import feedImage from '../../assets/feed.png'
import IgniteTimeImage from '../../assets/ignite-timer.png'
import DTMoneyImage from '../../assets/dt-money.png'
import CoffeDelivery from '../../assets/coffe-delivery.png'

export const DataProjects: ProjectModel[] = [
    {
        id: 1,
        name: 'Feed',
        description: 'Uma mini rede social com postagens e comentários',
        img: {
            name: 'Feed',
            path: feedImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/feed',
        productionUrl: null
    },
    {
        id: 2,
        name: 'Ignite Timer',
        description: 'Consiste em um timer para a realização de tarefas.',
        img: {
            name: 'Ignite Timer',
            path: IgniteTimeImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/02-ignite-timer',
        productionUrl: null
    },
    {
        id: 3,
        name: 'DT money',
        description: 'Aplicação web para gerenciamento de finanças pessoais',
        img: {
            name: 'DT money',
            path: DTMoneyImage
        },
        repositoryUrl: 'https://github.com/fabio-c266/03-dt-money',
        productionUrl: null
    },
    {
        id: 4,
        name: 'Coffe Delivery',
        description: 'Site web para uma cafeteria mostrando seus cafés e possibilitando ao usuário realizar a compra de seus produtos',
        img: {
            name: 'Coffe Delivery',
            path: CoffeDelivery
        },
        repositoryUrl: 'https://github.com/fabio-c266/coffee-delivery',
        productionUrl: null
    }
]
