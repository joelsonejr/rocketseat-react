# Bundlers x Compilers

## Compilers

- Convertem o JS para uma versão que seja compatível com os navegadores mais
  antigos.

- Exemplo:
  Babel

## Bundlers

- Ferramentas que pegavam todos os arquivos JS da aplicação, e convertiam em
  um único arquivos, porque os browsers só conseguiam importar um arquivo JS, e
  esse não poderia importar outros arquivos.

- Exemplos:
  WebPack

## Alternativas para criação do projeto

- Vite

  - Utiliza por padrão os Ecma Script Modules (ESM) nativos.
  - Não necessita de bundling.
  - Faz o compiling de forma automárica, dispensando assim o Babel.

- Snowpack
  - Parecido com o Vite, porém é menos utilizado pela comunidade.
