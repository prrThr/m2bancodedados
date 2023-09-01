# <center> Banco de Dados II </center>
### <center> Atividade ORM a partir de modelo de dado existente </center><br>

Considerando o arquivo de dados disponibilizado em formato .csv (people-
10000.xsl). Faça o que se pede:

* A) Criei um novo schema de banco de dados para recepcionar os
dados que serão migrados por este trabalho.

* B) Defina uma classe Model do framework ORM (Sequelize) para
mapear os dados que estão no arquivo. Todas as colunas são
relevantes e devem ser importadas.

* C) A tabela que representará o Model deve ser criada pela aplicação
(.sync), e não diretamente no banco de dados.
* D) Implemente uma funcionalidade que realiza a leitura dos dados do
arquivo .csv e fazer a inserção dos registros (um registro por linha) na
tabela correspondente no MySQL. A inserção dos dados deve ser feita
pelo framework de ORM (Sequelize), e não com raw SQL / native SQL.
* E) Após a importação dos dados possibilite o usuário executar duas
operações:
    1. exibir os dados importados, realizando a leitura dos mesmos
diretamente na tabela do MySQL onde os mesmos foram
armazenados.
    2. Filtrar os dados por nome, onde o usuário poderá entrar com
parte de um nome, e a aplicação irá filtrar todos os registros
que atendam ao critério LIKE %...% com o termo digitado.
Dicar para entrada de dado por teclado:
https://www.codecademy.com/article/getting-user-input-in-node-js