# Projeto feito no NLW da Rocketseat

## Projeto realizado utilizando Fastify no servidor, Next Js na Web e React Native com Expo no mobile.

## Como testar

### Abra cada uma das aplicações em um terminal diferente e siga os passos a baixo

### Servidor

- Renomeie o arquivo .env.local para .env
- Dentro do .env deixe somente um dos grupos de variaveis descomentada (web ou mobile)
- Rode no terminal os comandos:
- npm install
- npm run dev

### Web

- Copie o ipv4 da sua maquina (<a href='https://www.avast.com/pt-br/c-how-to-find-ip-address#:~:text=Voc%C3%AA%20pode%20encontrar%20seu%20endere%C3%A7o,ao%20lado%20do%20endere%C3%A7o%20IPv4.' target='_blank' rel='noreferrer'>Como achar meu ipv4</a>)
- Substitua somente os numeros 10.0.0.52 pelo seu ip no arquivo api.ts dentro de web/src/lib/api.ts
- Verifique no server se o grupo descomentado no .env do server é o web
- Rode no terminal os comandos:
- npm install
- npm run dev

### Mobile

- Copie o ipv4 da sua maquina (<a href='https://www.avast.com/pt-br/c-how-to-find-ip-address#:~:text=Voc%C3%AA%20pode%20encontrar%20seu%20endere%C3%A7o,ao%20lado%20do%20endere%C3%A7o%20IPv4.' target='_blank' rel='noreferrer'>Como achar meu ipv4</a>)
- Substitua somente os numeros 10.0.0.52 pelo seu ip no arquivo api.ts dentro de mobile/src/lib/api.ts
- Verifique no server se o grupo descomentado no .env do server é o mobile
- Rode no terminal os comandos:
- npm install
- npm run start
- Caso queira abrir no seu celular, instale o app expo direto da sua loja de apps
- Escaneie o QR Code do terminal e espere carregar