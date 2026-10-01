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
