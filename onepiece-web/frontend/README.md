
# One Piece Dex - Frontend

## Visão Geral

Este projeto é o frontend da aplicação One Piece Dex, desenvolvido em React com Vite, Tailwind CSS e integração com uma API backend. O objetivo é listar, filtrar e exibir detalhes dos personagens do universo One Piece.

## Estrutura de Pastas

```
frontend/
├── public/
│   └── images/           # Imagens utilizadas no projeto
├── src/
│   ├── assets/           # Recursos estáticos (ícones, imagens, etc.)
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Button.jsx    # Botão customizado
│   │   ├── CharacterCard.jsx # Card de personagem
│   │   ├── CharacterFilter.jsx # Filtro de personagens
│   │   └── Loader.jsx    # Indicador de carregamento
│   ├── data/
│   │   └── Characters.js # Dados mockados dos personagens
│   ├── pages/
│   │   ├── CharacterDetails.jsx # Página de detalhes do personagem
│   │   └── Home.jsx      # Página principal (lista e filtro)
│   ├── service/
│   │   └── api.js        # Serviço de integração com a API
│   ├── App.css          # Estilos globais
│   ├── App.jsx          # Componente raiz da aplicação
│   ├── index.css        # Estilos base
│   └── main.jsx         # Ponto de entrada do React
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
├── tailwind.config.js   # Configuração do Tailwind CSS
├── postcss.config.cjs   # Configuração do PostCSS
└── README.md            # Documentação do frontend
```

## Componentes e Páginas

### `App.jsx`
Componente principal que define as rotas e estrutura base da aplicação.

### `main.jsx`
Arquivo de entrada, renderiza o `App` no DOM.

### `components/`
- **Button.jsx**: Botão customizado, usado para ações como filtrar ou navegar.
- **CharacterCard.jsx**: Exibe informações resumidas de um personagem (nome, imagem, etc.).
- **CharacterFilter.jsx**: Permite filtrar personagens por critérios (nome, tipo, etc.).
- **Loader.jsx**: Indicador visual de carregamento, usado durante requisições.

### `data/Characters.js`
Contém dados mockados dos personagens, útil para desenvolvimento e testes.

### `pages/`
- **Home.jsx**: Página inicial, exibe lista de personagens e filtro.
- **CharacterDetails.jsx**: Página de detalhes, mostra informações completas de um personagem selecionado.

### `service/api.js`
Responsável por fazer requisições HTTP para o backend, buscar personagens, detalhes, etc.

## Fluxo da Aplicação

1. Usuário acessa a página inicial (`Home.jsx`).
2. O componente `CharacterFilter` permite filtrar personagens.
3. A lista de personagens é exibida usando `CharacterCard`.
4. Ao clicar em um personagem, o usuário é direcionado para `CharacterDetails.jsx`.
5. O serviço `api.js` faz a integração com o backend para buscar dados reais.

## Estilização

- **Tailwind CSS**: Utilizado para estilização rápida e responsiva.
- **App.css / index.css**: Estilos globais e customizações.

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run preview`: Visualiza o build.

## Dependências Principais

- **React**: Biblioteca principal para construção da UI.
- **Vite**: Ferramenta de build e desenvolvimento.
- **Tailwind CSS**: Framework de estilos.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção.
3. Faça suas alterações.
4. Envie um pull request.

## Observações

- O frontend depende do backend para dados reais.
- Dados mockados estão disponíveis em `data/Characters.js` para testes.

## Contato

Para dúvidas ou sugestões, entre em contato com o mantenedor do projeto.
