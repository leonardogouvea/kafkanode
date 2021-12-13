# Micro-serviço com Node.js

- Utiliazando Kafka;
- Utilizando Node;

## Aplicações

- API principal
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta 
- Receber uma resposta assincrona de quando o e-mail com o certificado foi enviado;

