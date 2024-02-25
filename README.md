# Marketplace Scraper

Este projeto consiste em ser um 'raspador' (scraper) de marketplaces.
Utilizei aqui as três principais libs que auxiliam a rodar um servidor e fazer a conexão com o BD. Fique à vontade para visitar a documentação e conhecer um pouco mais sobre como tudo funciona.

 - [Express](https://expressjs.com/en/guide/routing.html)
 - [Cheerio](https://cheerio.js.org/docs/intro)
 - [Axios](https://axios-http.com/docs/intro)

# Para começar

1 - Clonar o projeto
```
git clone git@github.com:rich-dacan/market-place-scraping.git
```

2 - Instalar pacotes da API
```bash
cd market-place-scraping/backend

npm install
```
3 - Criar uma cópia o arquivo `.env.sample` para `.env`
```bash
cp .env-sample .env
```

4 - Rodar a API
```bash
npm run dev
```


## Testando o endpoint principal `/amazon-scraping`
Para facilitar o teste, pode-se usar alguma ferramenta de envio de requisições HTTP como o [Postman](https://www.postman.com/explore)  ou [Insomnia](https://docs.insomnia.rest/).
O seu funcionamento é simples, basta passar as palavra chaves que deseja pesquisar como query param na url da requisição, como no exemplo à seguir:

![](/frontend/src/assets/amazon-scraping.png)


