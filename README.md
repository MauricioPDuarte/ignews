
<h1 align="center">
    Ignews - Next.js
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">Next.Js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-variáveis-de-ambiente">Variáveis Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dart-iniciando-o-stripe-cli">Stripe CLI</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
</p>

<p align="center">
   <img src="https://github.com/MauricioPDuarte/ignews/blob/main/MacBook%20Pro.png"> 
</p>

## :page_with_curl: Sobre
Aplicação desenvolvida no curso do Ignite, proporcionado pela Rocketseat, onde desenvolvemos um blog com publicações do mundo React. Nesse Blog, utilizamos tecnologias que permitiram a integração com uma API de pagamento, API de CMS, toda a parte de autenticação, o uso de páginas estáticas e indexadas e entre outras funcionalidades. 

As tecnologias que utilizamos para tornar esse projeto real foi o Next.Js, NextAuth, Prismic CMS, FaunaDB, Stripe e outras. 

 
Mas Mauricio, o que são essas tecnologias, posso usar também?  Claro, pode usar sim! Todas essas tecnologias que foram utilizadas no projeto permitem o uso gratuito (com limitações). Agora, em relação ao que significa cada tecnologia, o Next.Js permite a criação de páginas estáticas e indexadas, que melhoram o SEO do site, e permite que a gente trabalhe com uma camada no “servidor”, logo, podemos trabalhar utilizando o conceito de serveless. O NextAuth disponibiliza para a gente diversas formas de autenticação para ser utilizada em nossa aplicação. O Stripe faz toda a parte do pagamento e assinaturas no nosso site, ele fica responsável por toda parte que envolve dinheiro. O Prismic(CMS) gerencia todas as nossas publicações do Blog, com um painel super simples, que permite a criação de novos posts, e com uma API que disponibiliza as nossas publicações para serem consumidas. Já o FaunaDB, é o nosso banco de dados, onde armazenamos os usuários cadastrados e suas assinaturas.  


## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Yarn**](https://yarnpkg.com/) instalado.
- Ter [**Stripe CLI**](https://stripe.com/docs/stripe-cli) instalado.
- Ter uma conta no [**FaunaDB**](https://fauna.com/)
- Ter uma conta no [**Stripe**](https://stripe.com/en-br)
- Ter uma conta no [**Prismic CMS**](https://prismic.io/)
- Criar as variáveis de ambiente
- Criar as credenciais do GitHub

## :syringe: Dependências
* Next.js
* Typescript
* SASS
* axios
* Stripe
* FaunaDB
* NextAuth
* Prismic
* React Icons
...

## :rocket: Criar OAuth App no GitHub
<p align="center">
   <img src="https://github.com/MauricioPDuarte/ignews/blob/main/dica-git.png"> 
</p>

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/MauricioPDuarte/ignews ignews

  # Entrar no diretório:
  $ cd ignews
```

## :computer: Iniciando front-end
```bash
  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev
```

## :hammer: Variáveis de ambiente
```bash
  # Crie um arquivo chamado ".env.local" na pasta local do projeto, coloque o conteúdo dentro e popule corretamente:
  
  # Stripe
  STRIPE_API_KEY=
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
  STRIPE_WEBHOOK_SECRET=
  STRIPE_SUCCESS_URL=http://localhost:3000/post
  STRIPE_CANCEL_URL=http://localhost:3000/

  # Github
  GITHUB_CLIENT_ID=
  GITHUB_CLIENT_SECRET=

  # FaunaDB
  FAUNADB_KEY=

  # Prismic CMS
  PRISMIC_ENDPOINT=
  PRISMIC_ACCESS_TOKEN=
```

## :dart: Iniciando o Stripe CLI
```bash
  # Rodar o Stripe
  $ stripe listen --forward-to localhost:3000/api/webhooks
```


Feito com ❤️ por Mauricio Pruss Duarte 👋🏻 [Get in touch!](https://github.com/MauricioPDuarte)




