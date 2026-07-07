# Conversa sobre Scroll Snap no Carrossel

Data: 06/07/2026

---

## Usuário

o que é Scroll snap no carrossel?

---

## Assistente

**Scroll snap** em um carrossel é uma técnica de CSS que faz o scroll “encaixar” automaticamente em um item específico.

Em vez do usuário arrastar o carrossel e ele parar em qualquer posição, o navegador força o scroll a parar alinhado no próximo card, slide ou imagem.

Exemplo visual:

```txt
[ Slide 1 ]  [ Slide 2 ]  [ Slide 3 ]
```

Quando o usuário arrasta para o lado, o carrossel “gruda” no próximo slide, deixando ele bem alinhado na tela.

Exemplo em CSS:

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.slide {
  min-width: 100%;
  scroll-snap-align: start;
}
```

Nesse exemplo:

`overflow-x: auto` permite scroll horizontal.

`scroll-snap-type: x mandatory` diz que o scroll deve encaixar no eixo horizontal.

`scroll-snap-align: start` diz que cada slide deve alinhar pelo início.

Na prática, ele é muito usado para criar carrosséis mais simples, principalmente em mobile, sem precisar de muita lógica em JavaScript.

Exemplo comum:

```html
<div class="carousel">
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</div>
```

É uma boa opção quando você quer um carrossel leve, fluido e com comportamento nativo do navegador.

---

## Usuário

quero que voce transforme isso em um exemplo mais premium e real

---

## Assistente

Claro. Aqui está uma versão mais **premium, realista e com cara de projeto profissional** usando Scroll Snap em um carrossel de cards.

### Exemplo: carrossel premium de planos

```html
<section class="pricing-section">
  <div class="section-header">
    <span class="eyebrow">Planos</span>
    <h2>Escolha o melhor plano para sua equipe</h2>
    <p>
      Navegue pelos planos e encontre a opção ideal para organizar seus projetos
      com mais clareza e produtividade.
    </p>
  </div>

  <div class="plans-carousel">
    <article class="plan-card">
      <span class="badge">Essencial</span>
      <h3>Starter</h3>
      <p class="description">Ideal para quem está começando.</p>

      <div class="price">
        R$ 29
        <span>/mês</span>
      </div>

      <ul>
        <li>Até 3 projetos</li>
        <li>1 usuário</li>
        <li>Suporte básico</li>
      </ul>

      <button>Começar agora</button>
    </article>

    <article class="plan-card featured">
      <span class="badge">Mais escolhido</span>
      <h3>Pro</h3>
      <p class="description">Para equipes que querem produtividade.</p>

      <div class="price">
        R$ 79
        <span>/mês</span>
      </div>

      <ul>
        <li>Projetos ilimitados</li>
        <li>Até 10 usuários</li>
        <li>Relatórios avançados</li>
      </ul>

      <button>Assinar plano Pro</button>
    </article>

    <article class="plan-card">
      <span class="badge">Empresas</span>
      <h3>Business</h3>
      <p class="description">Para operações maiores e times escaláveis.</p>

      <div class="price">
        R$ 149
        <span>/mês</span>
      </div>

      <ul>
        <li>Usuários ilimitados</li>
        <li>Permissões avançadas</li>
        <li>Suporte prioritário</li>
      </ul>

      <button>Falar com vendas</button>
    </article>
  </div>
</section>
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
}

.pricing-section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-header {
  max-width: 620px;
  margin-bottom: 40px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: #38bdf8;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1;
  letter-spacing: -0.04em;
}

.section-header p {
  margin-top: 16px;
  color: #94a3b8;
  font-size: 18px;
  line-height: 1.6;
}

.plans-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 8px 4px 24px;

  scroll-snap-type: x mandatory;
  scroll-padding-left: 4px;
}

.plans-carousel::-webkit-scrollbar {
  height: 8px;
}

.plans-carousel::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 999px;
}

.plan-card {
  flex: 0 0 320px;
  min-height: 460px;
  padding: 28px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 28px;
  background: linear-gradient(180deg, #1e293b 0%, #111827 100%);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);

  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.plan-card.featured {
  border-color: rgba(56, 189, 248, 0.7);
  background:
    radial-gradient(circle at top right, rgba(56, 189, 248, 0.25), transparent 36%),
    linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.badge {
  display: inline-flex;
  margin-bottom: 24px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
  font-size: 13px;
  font-weight: 700;
}

.plan-card h3 {
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.03em;
}

.description {
  margin: 10px 0 24px;
  color: #94a3b8;
  line-height: 1.5;
}

.price {
  margin-bottom: 28px;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.price span {
  color: #94a3b8;
  font-size: 16px;
  font-weight: 500;
}

.plan-card ul {
  display: grid;
  gap: 14px;
  margin: 0 0 32px;
  padding: 0;
  list-style: none;
  color: #cbd5e1;
}

.plan-card li::before {
  content: "✓";
  margin-right: 10px;
  color: #38bdf8;
  font-weight: 800;
}

.plan-card button {
  width: 100%;
  margin-top: auto;
  padding: 14px 18px;
  border: 0;
  border-radius: 16px;
  background: #38bdf8;
  color: #082f49;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
}

.plan-card button:hover {
  filter: brightness(1.08);
}

@media (min-width: 900px) {
  .plans-carousel {
    overflow-x: visible;
  }

  .plan-card {
    flex: 1;
  }
}
```

O ponto principal desse exemplo está aqui:

```css
.plans-carousel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.plan-card {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

Com isso, no mobile, o usuário arrasta os cards horizontalmente e o navegador encaixa automaticamente cada plano na posição correta. O resultado parece um carrossel moderno, mas sem precisar de biblioteca externa nem JavaScript.

Essa abordagem é ótima para:

```txt
- cards de planos
- depoimentos
- produtos
- banners
- cards de serviços
- aulas de um curso
- repertórios/músicas em destaque
```

Em um projeto real, eu usaria Scroll Snap quando o carrossel não precisa de autoplay, loop infinito ou lógica muito complexa. Para uma experiência mobile premium e leve, ele resolve muito bem.

---

## Usuário

quero fazer o download de toda essa conversa em um arquivo markdow
