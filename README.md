<h1 align="center">
    <img alt="ioasys" src="https://bytebucket.org/ioasys/books-react-native/raw/de6de20784a3329b8a222000f046921545f3c6be/logo_ioasys.jpeg" width="200px" />
</h1>

<h3 align="center">
  <img alt="ioasys" src="assets/Logo.png" width="40px" /> <br/><br/>
  Teste de Aplicação Mobile
</h3>

<p align="center">Projeto ioasys Books feito em React Native<br/><br/>A aplicação foi desenvolvida com React Native, TypeScript e Styled Components.JS</p>

<p align="center">
  <a href="#coffee-build-setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h2>
  <img src="./assets/frame.png" />
</h2>

### Requisitos

* Utilizar React Native;
* TypesScript;
* Seguir o Layout proposto;
* Integrar API respeitando os contratos de OAuth;
* Git Flow


# :coffee: Build Setup
# :iphone: Mobile

Após clonar o repositório, entre na pasta `ioasys-book` e instale todas as dependências utilizando o comando:
```bash
# Digite o comando abaixo para instalar as dependências:
yarn install
```

Para rodar o App no emulador:
```bash
# Irá iniciar o metro-bundler
yarn start
```
E em outra tela do terminal:
```bash
# Para emular no Android
yarn run android

```
Para emular no IOS:
```bash
yarn run ios
```
<br>

### 🛠 Tecnologias

As seguintes bibliotecas foram usadas na construção do projeto:
- react-native-cli - Utilizei a CLI do React Native com TypeScript Template.
- axios - Para realizar os métodos de chamadas á API.
- styled-components - Lib utilizada para estilizar todo o app.
- Eslint - Linter.
- Prettier - Formatador de códigos, boas práticas de código limpo e organização.
- Husky - Utilitário de melhoramento para commits.
- Jest - Framework de testes.

### 🛠 Itens importantes

Adicionei como parte de organização, os "Absolute Paths", que ao invés dos caminhos relativos ao importarmos as bibliotecas do tipo: ```'import Component from '../../../components/Component';``` ficando assim: "import Component from ```'@components/Component';``` Essa é uma prática que já utilizo em meus projetos com o intuito de deixar o código melhor organizado e limpo.

Este desafio foi muito interessante, principalmente na parte de filtragem e de pesquisa no app, utilizei funções que fazem tanto a consulta via input na home inicial, quanto no modal de filtros. Neste modal de filtros, pode se fazer tanto pesquisas por categorias, por ano de publicação ou pode fazer apenas das categorias ou apenas dos anos.
Ao filtrar os dados da api ele retornará aquele que der match com o resultado, caso contrário aparecerá uma mensagem que "Nenhum registro foi encontrado" e um botão para limpar o filtro e retornar a listagem normal.

Utilizei na parte do login e login persistente o async Storage do React Native utilizando um contexto de autenticação para manter o usuário logado no app com o refresh token que a própria API fornece.


### Testes Unitários

Configurei os testes unitários utilizando o Jest e bibliotecas auxiliares para execução dos testes unitários.
Criei o teste unitário para o hook de autenticação e testes simples para os componentes e screens.

Para rodar os testes:
```bash
# Rodar os testes unitários
yarn test
```
OBS.: Ao adicionar um novo commit, a aplicação só estará apta a subir para o repositório se passar pelo linter e test que são disparados pelo husky ao escrever o commit, criando assim a regra básica de qualidade de código e boas práticas.

<h2>
  <img src="./assets/tests.png" />
</h2>

### Autor
---

<div align="center">
<a href="https://www.linkedin.com/in/julianotavares/">
 <img style="border-radius: 50%" src="https://avatars3.githubusercontent.com/u/38234499?s=460&u=465cde5b2afdf65c5b43d8c0496bde2fa5a7dd1a&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliano Tavares</b></sub></a> <a href="https://www.linkedin.com/in/julianotavares/" title="Juliano Tavares">🚀</a>

Feito com ❤️ por Juliano Tavares 👋🏽!
</div>
