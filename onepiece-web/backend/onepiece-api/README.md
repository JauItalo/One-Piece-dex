# One Piece Dex - Backend

## Visão Geral

Este projeto é o backend da aplicação One Piece Dex, desenvolvido com Spring Boot. Ele fornece uma API REST para gerenciar e consultar personagens do universo One Piece, servindo dados para o frontend.

## Estrutura de Pastas

```
onepiece-api/
├── src/
│   ├── main/
│   │   ├── java/com/onepiece/onepiece_api/
│   │   │   ├── OnepieceApiApplication.java   # Classe principal (entrypoint)
│   │   │   ├── config/
│   │   │   │   ├── DataLoader.java           # Popula o banco com dados iniciais
│   │   │   │   └── SecurityConfig.java       # Configuração de segurança (Spring Security)
│   │   │   ├── controller/
│   │   │   │   └── CharacterController.java  # Endpoints REST dos personagens
│   │   │   ├── model/
│   │   │   │   └── Character.java            # Entidade Personagem
│   │   │   ├── repository/
│   │   │   │   └── CharacterRepository.java  # Interface de acesso ao banco (JPA)
│   │   │   └── service/
│   │   │       └── CharacterService.java     # Lógica de negócio dos personagens
│   │   └── resources/
│   │       ├── application.properties        # Configurações da aplicação
│   │       ├── static/                      # Arquivos estáticos (se necessário)
│   │       └── templates/                   # Templates (caso use Thymeleaf)
│   └── test/
│       └── java/com/onepiece/onepiece_api/
│           └── OnepieceApiApplicationTests.java # Testes automatizados
├── pom.xml                                  # Gerenciador de dependências Maven
├── mvnw / mvnw.cmd                          # Wrapper do Maven
└── HELP.md                                  # Ajuda e instruções do Spring Boot
```

## Principais Classes e Funções

- **OnepieceApiApplication.java**: Classe principal, inicializa a aplicação Spring Boot.
- **config/DataLoader.java**: Carrega dados iniciais no banco ao iniciar a aplicação.
- **config/SecurityConfig.java**: Configura autenticação/autorização com Spring Security.
- **controller/CharacterController.java**: Define os endpoints REST para listar, buscar e filtrar personagens.
- **model/Character.java**: Entidade JPA que representa um personagem.
- **repository/CharacterRepository.java**: Interface para operações CRUD no banco de dados.
- **service/CharacterService.java**: Implementa a lógica de negócio, manipula dados dos personagens.

## Fluxo da Aplicação

1. O frontend faz requisições HTTP para os endpoints REST do backend.
2. O `CharacterController` recebe as requisições e delega para o `CharacterService`.
3. O `CharacterService` acessa o banco via `CharacterRepository` e retorna os dados.
4. O backend responde ao frontend com os dados dos personagens.

## Configuração e Execução

1. Certifique-se de ter o Java 17+ instalado.
2. No diretório `onepiece-api`, execute:
   - `./mvnw spring-boot:run` (Linux/Mac)
   - `mvnw.cmd spring-boot:run` (Windows)
3. A API estará disponível em `http://localhost:8080`.

## Endpoints REST Exemplos

- `GET /characters` — Lista todos os personagens
- `GET /characters/{id}` — Detalhes de um personagem
- `GET /characters?nome=Luffy` — Filtra personagens por nome

## Dependências Principais

- **Spring Boot**: Framework principal
- **Spring Data JPA**: Persistência de dados
- **Spring Security**: Segurança da API
- **H2 Database**: Banco de dados em memória para desenvolvimento/testes

## Testes

- Os testes automatizados estão em `src/test/java/com/onepiece/onepiece_api/OnepieceApiApplicationTests.java`.
- Para rodar os testes: `./mvnw test` ou `mvnw.cmd test`

## Observações

- O backend pode ser facilmente adaptado para outros bancos de dados (MySQL, PostgreSQL, etc.)
- Dados iniciais são carregados automaticamente via `DataLoader`.

## Contato

Para dúvidas ou sugestões, entre em contato com o mantenedor do projeto.
