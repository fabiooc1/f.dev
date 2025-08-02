import { JourneyItemModel } from "../models/JourneyItemModel";

export const DataJourneyItems: JourneyItemModel[] = [
    {
        id: 1,
        company: "Dia de Obra",
        role: "Estágio de Desenvolvimento Web - NextJs | NestJs | PostgreSQL",
        roleType: "Estágio",
        startedIn: "Maio de 2023",
        endedIn: "Setembro de 2023",
        description: [
            "Realizei correções de diversos bugs e implementei novas funcionalidades utilizando Next.js no frontend e NestJS no backend. Sendo as principais:",
            "- Integrei o Facebook Pixel ao sistema para gerar estatísticas no painel do Facebook ADS e automatizei através de um webhook que ao fazer cadastrado a equipe de marketing identificasse e contatasse usuários que acessaram o site e se registraram para usar o teste gratuito de 7 dias.",
            "- Desenvolvi uma funcionalidade no backend para armazenamento de documentos, possibilitando o registro de arquivos importantes relacionados a cada obra, como contratos e planejamentos.",
            "- Criei novas páginas na landing page, incluindo tutoriais e uma seção dedicada à venda de e-books e planilhas, com o objetivo de aumentar a visibilidade e o valor agregado do sistema."
        ],
    },
    {
        id: 2,
        company: "Agência de Tecnologia do Estado (ATI)",
        role: "Estágio de Desenvolvimento Web - HTML | CSS | JavaScript | PHP | MySql/MariaDB",
        roleType: "Estágio",
        startedIn: "Setembro de 2023",
        endedIn: "Setembro de 2024",
        description: [
            "Atuei principalmente como desenvolvedor fullstack, utilizando PHP com MySQL/MariaDB nas seguintes demandas:",
            "- Desenvolvi uma API de integração com o sistema interno emails da Agência, com o objetivo de facilitar o trabalho do desenvolvedor frontend na criação de formulários para programas das secretarias do Estado do Maranhão.",
            "- Criei um encurtador de URLs personalizado, otimizando o compartilhamento de links utilizados com frequência pela equipe, desde a fase de planejamento até a produção.",
            "- Liderei o desenvolvimento fullstack, desde o planejamento até a produção, do projeto 30 Cores em Maio, que permitia aos usuários escanear QR Codes para votar em obras e exibir um ranking das obras mais votadas."
        ]
    },
    {
        id: 3,
        company: "Secretaria Municipal de Informação e Tecnologia (SEMIT)",
        role: "Estágio de Desenvolvimento de Sistemas - React | NestJs | PostgreSQL | Nginx",
        roleType: "Estágio",
        startedIn: "Junho de 2025",
        endedIn: "O momento",
        description: [
            "Fui responsável pelo desenvolvimento do site e painel administrativo do São João de São Luís 2025, integrado com uma API para gerenciamento de conteúdos (imagens, vídeos, notícias) e publicação em produção com Nginx."
        ]
    }
]
.reverse()
