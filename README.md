# Flip Seguros

Proposta de novo site institucional para a Flip Seguros, com seis páginas, catálogo de 18 produtos, detalhes de coberturas, contato e seção de avaliações no Google.

## Executar localmente

```sh
cd site
npm run dev
```

Abra http://localhost:4173. Para verificar o catálogo e os formulários:

```sh
cd site
npm test
```

O site é estático e está em `site/dist`. Consulte `site/README.md` para detalhes de conteúdo, formulários e imagens. Os formulários preparam mensagens para envio no aplicativo de e-mail; não há backend de envio automático.

## Publicar na Vercel

Importe este repositório usando a raiz do repositório como **Root Directory**. O arquivo `vercel.json` define o site como estático e publica somente `site/dist`, sem instalação ou compilação. As páginas HTML, imagens e scripts dessa pasta são servidos diretamente.

## Apresentação

O PDF da proposta está em `output/pdf/Flip-Seguros-Apresentacao.pdf`.

## Conteúdo e imagens

As informações foram preservadas do site original da corretora. As fontes das imagens constam em `site/assets-sources.md`. Esta é uma proposta de redesign, sujeita à validação da empresa antes do lançamento no domínio oficial.
