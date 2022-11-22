## EXPLICANDO COMO SUBIR O PROJETO ##

Esse projeto foi realizado utilizando o Banco de Dados Postgres através do software DBeaver.
A criação do Banco de Dados foi feita com o sistema Migrations do Sequelize e toda a integração 
foi realizada também com Sequelize.

O principais passos para execução e testes são:

1. Nos arquivos ".env" e "config/config.json" adicionar o <<USERNAME>>  e <<PASSWORD>> de login no DBeaver
2. Na ferramenta Thunder Client, importe o arquivo "thunder-collection_M8_Projeto_Leticia.json" para realizar os testes
3. No Terminal, adicione o comando "npm i" para instalação das dependências necessárias
4. No Terminal, execute "npx sequelize-cli db:create" para criar o Banco de Dados
5. No Terminal, execute "npx sequelize-cli db:migrate" para executar a migration
6. Para popular a tabela, execute no Terminal o comando "npx sequelize-cli db:seed:all"
7. Novamente no terminal, adicione "npm run dev" para inicializar a aplicação e boa diversão :D
