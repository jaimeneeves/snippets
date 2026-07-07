# Carrossel com CSS Scroll Snap

Projeto criado para demonstrar como construir um carrossel moderno, responsivo e funcional usando apenas **HTML** e **CSS**, sem depender de JavaScript ou bibliotecas externas.

Este exemplo foi desenvolvido como apoio para o vídeo do canal, mostrando na prática como o recurso **CSS Scroll Snap** pode ser usado para criar uma experiência de navegação fluida em carrosséis.

## Preview

O projeto apresenta um carrossel de cards com visual premium, ideal para simular seções reais de uma aplicação, como:

* planos de assinatura;
* produtos;
* depoimentos;
* serviços;
* aulas;
* banners;
* conteúdos em destaque.

## O que é CSS Scroll Snap?

O **CSS Scroll Snap** é um recurso nativo do CSS que permite controlar o comportamento do scroll, fazendo com que os elementos “encaixem” automaticamente em posições específicas.

Em vez do usuário arrastar o carrossel e ele parar em qualquer ponto, o navegador alinha o próximo item de forma automática, criando uma experiência mais agradável, principalmente em dispositivos móveis.

## Tecnologias utilizadas

* HTML5
* CSS3
* CSS Scroll Snap
* Flexbox
* Layout responsivo

## Funcionalidades

* Carrossel horizontal responsivo;
* Scroll com encaixe automático;
* Cards com layout moderno;
* Destaque visual para um card principal;
* Sem JavaScript;
* Sem bibliotecas externas;
* Layout adaptado para mobile e desktop.

## Principais propriedades usadas

```css
scroll-snap-type: x mandatory;
scroll-snap-align: start;
scroll-snap-stop: always;
overflow-x: auto;
```

### `scroll-snap-type`

Define que o container terá pontos de encaixe durante o scroll.

```css
scroll-snap-type: x mandatory;
```

Neste caso, o encaixe acontece no eixo horizontal.

### `scroll-snap-align`

Define como cada item será alinhado dentro do container.

```css
scroll-snap-align: start;
```

Aqui, cada card será alinhado pelo início.

### `scroll-snap-stop`

Ajuda a forçar uma parada mais precisa em cada item.

```css
scroll-snap-stop: always;
```

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/jaimeneeves/snippets.git
```

Acesse a pasta do projeto:

```bash
cd css/scroll-snap-carrossel
```

Abra o arquivo `index.html` diretamente no navegador.

Se preferir, você também pode usar uma extensão como **Live Server** no VS Code.

## Estrutura sugerida

```txt
.
├── index.html
├── style.css
└── README.md
```

## Quando usar Scroll Snap?

O CSS Scroll Snap é uma boa escolha quando você precisa de um carrossel simples, leve e com boa experiência no mobile.

Ele funciona muito bem para:

* listas horizontais;
* cards de produto;
* planos de assinatura;
* depoimentos;
* galerias;
* seções de destaque.

## Quando talvez não usar?

Talvez você precise de JavaScript ou de uma biblioteca se o carrossel exigir recursos mais avançados, como:

* autoplay;
* loop infinito;
* botões de navegação complexos;
* paginação dinâmica;
* integração com APIs;
* controle total do estado do carrossel.

## Objetivo do projeto

O objetivo deste projeto é mostrar que nem todo carrossel precisa começar com JavaScript.

Em muitos casos, o próprio CSS já oferece uma solução simples, performática e elegante para criar uma boa experiência de navegação.

## Autor

Feito por **Jaime Neves**.

Conteúdo criado para fins educacionais, como apoio para vídeo sobre Frontend, CSS e desenvolvimento web.

## Licença

Este projeto está disponível para estudo e uso livre.
