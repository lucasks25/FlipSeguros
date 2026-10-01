# Flip Seguros

Site institucional estático com início, produtos, sobre a corretora, proposta, contato e política de privacidade.

## Executar

```sh
cd site
npm run dev
```

Abra http://localhost:4173. Execute `npm test` para verificar o catálogo e a preparação das mensagens.

## Conteúdo e formulários

O catálogo reúne os 18 produtos do site original e as 16 páginas de detalhes existentes, preservadas em `dist/product-details.json`. Fonte: https://construtor.oncorretor.com.br/flipseguros.com.br.

As páginas de proposta e contato preparam uma mensagem por e-mail e exigem revisão pelo visitante. O envio final ocorre no aplicativo de e-mail; não há serviço de entrega SMTP conectado. Os links de contratação de Auto e Viagem preservam os destinos oficiais existentes.

## Imagens

Logotipo original da Flip. Fotografias reais do Unsplash, com URLs registradas em `assets-sources.md`. As fotografias são ilustrativas; não são apresentadas como funcionários, clientes ou sede da Flip.

## Avaliações no Google

A seção `#avaliacoes` convida clientes a compartilhar a experiência no perfil público da Flip. Os dois depoimentos foram conferidos no Google Maps em 01/10/2026. O botão abre o perfil confirmado pelo nome, site e telefone, e orienta o visitante a clicar em “Avaliar”. Não há nota agregada ou contador de avaliações mantidos artificialmente.

Perfil: https://www.google.com/maps/place/Flip+Seguros/@-23.580734,-46.6822757,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b96b856de4d:0x3f19229d34017ee2!8m2!3d-23.580734!4d-46.6822757!16s%2Fg%2F11g0mtn6p4
