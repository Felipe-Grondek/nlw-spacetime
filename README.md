# Projeto feito no NLW da Rocketseat

## Projeto realizado utilizando Fastify no servidor, Next Js na Web e React Native com Expo no mobile.

## Como testar

### Servidor

- Renomeie o arquivo .env.local para .env
- Dentro do .env deixe somente um dos grupos de variaveis descomentada (web ou mobile)
- Rode no terminal os comandos:
- npm install
- npm run dev

### Web

- Copie o ipv4 da sua maquina (<a href='https://www.avast.com/pt-br/c-how-to-find-ip-address#:~:text=Voc%C3%AA%20pode%20encontrar%20seu%20endere%C3%A7o,ao%20lado%20do%20endere%C3%A7o%20IPv4.' target='_blank' rel='noreferrer'>Como achar meu ipv4</a>)
- Substitua somente os numeros 10.0.0.52 pelo seu ip no arquivo api.ts dentro de web/src/lib/api.ts
- Rode no terminal os comandos:
- npm install
- npm run dev

