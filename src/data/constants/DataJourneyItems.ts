import { JourneyItemModel } from "../models/JourneyItemModel";

export const DataJourneyItems: JourneyItemModel[] = [
    {
        id: 1,
        company: "Dia de Obra",
        role: "Desenvolvedor Web Full Stack - Next.js | NestJS | PostgreSQL",
        roleType: "Estágio",
        startedIn: "Maio de 2023",
        endedIn: "Setembro de 2023",
        description: [
            "Corrigi bugs e implementei novas funcionalidades no sistema, com Next.js no frontend e NestJS no backend. Principais entregas:",
            "- Facebook Pixel e funil de leads: integrei o Pixel para gerar estatísticas no Facebook Ads e automatizei, via webhook, o aviso à equipe de marketing sempre que um usuário se cadastrava no teste gratuito de 7 dias.",
            "- Armazenamento de documentos: desenvolvi no backend o registro de arquivos importantes de cada obra, como contratos e planejamentos.",
            "- Landing page: criei páginas de tutoriais e uma seção de venda de e-books e planilhas para aumentar a visibilidade e o valor agregado do sistema.",
            "- Qualidade: mais de 50 branches de correção de bugs encontrados na plataforma entregue à equipe."
        ],
    },
    {
        id: 2,
        company: "Agência de Tecnologia da Informação do Maranhão (ATI)",
        role: "Desenvolvedor Web Full Stack - HTML | CSS | JavaScript | PHP | MySQL/MariaDB",
        roleType: "Estágio",
        startedIn: "Setembro de 2023",
        endedIn: "Setembro de 2024",
        description: [
            "Atuei como desenvolvedor full stack em PHP com MySQL/MariaDB, criando sistemas novos, mantendo os existentes e fazendo o deploy. Principais entregas:",
            "- Integração com o sistema interno de e-mails: facilitou o trabalho do desenvolvedor frontend na criação de formulários para programas das secretarias do Estado do Maranhão.",
            "- Encurtador de URLs personalizado: otimizou o compartilhamento dos links mais usados pela equipe, do planejamento à produção.",
            "- 30 Cores em Maio: liderei o desenvolvimento, do planejamento à produção, de um sistema em que usuários escaneavam QR Codes para votar em obras e viam o ranking das mais votadas."
        ]
    },
    {
        id: 3,
        company: "Secretaria Municipal de Informação e Tecnologia (SEMIT)",
        role: "Desenvolvedor Web Full Stack - React | NestJS | PostgreSQL | Nginx",
        roleType: "Estágio",
        startedIn: "Junho de 2025",
        endedIn: "Dezembro de 2025",
        description: [
            "Criei novos sistemas, corrigi bugs, fiz o deploy das aplicações e alinhei a execução dos projetos diretamente com o Superintendente de Tecnologia. Principais entregas:",
            "- São João de São Luís 2025: site do evento com painel administrativo para a secretaria gerenciar imagens, vídeos e notícias, publicado em produção com Nginx.",
            "- Aniversário da cidade 2025: site do evento com painel administrativo para gerenciamento completo do conteúdo.",
            "- Cidadão Seguro: iniciei o desenvolvimento de um sistema de pulseiras com QR Code para identificar crianças e idosos perdidos e localizar seus responsáveis."
        ]
    },
    {
        id: 4,
        company: "Empresa Maranhense de Serviços Hospitalares (EMSERH)",
        role: "Engenheiro de Software - Next.js | NestJS",
        roleType: "Júnior",
        startedIn: "Dezembro de 2025",
        endedIn: "O momento",
        description: [
            "Levanto requisitos, planejo e executo projetos, automatizo processos manuais, mantenho aplicações e faço o deploy. Principais entregas:",
            "- Fluxo AJGP: centralizei no portal da diretoria os processos do SEI da Assessoria Jurídica em Gestão de Pessoas, com indicadores sobre os documentos.",
            "- Gestão de Eficácia: plataforma que mede a qualidade dos treinamentos, comparando o colaborador antes e depois por meio de avaliação do gestor e prova."
        ]
    }
]
.reverse()
