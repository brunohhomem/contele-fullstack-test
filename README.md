## Descrição

Este projeto é uma aplicação **fullstack** utilizada em um **teste técnico**, com o objetivo de corrigir problemas existentes, garantir o funcionamento correto da aplicação e manter a estabilidade da base de código fornecida.

A aplicação consiste em uma **API backend** responsável pelo gerenciamento de usuários e posts, integrada a um banco de dados **MySQL**, permitindo operações básicas de criação, listagem, atualização e exclusão de dados.

Durante o desenvolvimento, o foco principal foi:

- Corrigir erros existentes
- Garantir a correta comunicação com o banco de dados
- Manter o comportamento esperado da aplicação
- Respeitar o escopo solicitado no teste técnico, evitando refatorações extensas

Algumas melhorias pontuais foram aplicadas, mas evoluções maiores foram propositalmente **documentadas em vez de implementadas**.

---

## 🛠 Tecnologias utilizadas

### Backend
- **Node.js**
- **JavaScript**
- **Express**
- **MySQL**
- **Docker / Docker Compose**

### Infraestrutura
- **Docker** para padronização do ambiente
- Variáveis de ambiente via `.env`

---

## ▶️ Como executar o projeto

### Pré-requisitos
- **Docker**
- **Docker Compose**

### Passos para execução

1. Clone o repositório:
```bash
git clone https://github.com/brunohhomem/contele-fullstack-test.git
```
2. Acesse o repositório
```
cd contele-fullstack-test
```

3. Crie o arquivo `.env` a partir do `.env.example`
(copiando o arquivo e renomeando para `.env`).

4. Executar a aplicação:
```
docker-compose up --build 
```
---

## Acesso à aplicação

Após a execução, a aplicação estará disponível em:

```
http://localhost:8081
```

A documentação dos endpoints da API pode ser acessada em:

```
http://localhost:8081/api/v1/docs
```

---
## Documentação adicional

### Melhorias e próximos passos
Ideias técnicas e evoluções que poderiam ser aplicadas em um cenário real:  
[NEXT_STEPS.md](./NEXT_STEPS.md)

### Instruções originais do teste
Cópia do README original fornecido no teste técnico, mantido como referência:  
[INSTRUCOES.md](./INSTRUCOES.md)


