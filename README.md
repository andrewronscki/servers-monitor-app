## Projeto de monitoramento de servidores

### clone o projeto:
```git clone <url>```
### Instale as dependências:
```yarn``` ou ```npm install```
### Crie uma conta na <b><a href="https://api2.totalvoice.com.br/painel/signup.php">Total Voice</a></b>
### Crie um arquivo .env na raíz do projeto e preencha com os seguintes dados:
```
TOTALVOICE_KEY = <access_token criado para seu usuário (consegue ser visualizado no painel da Total Voice)>

DEVELOPER_NAME = <nome do dev>
DEVELOPER_PHONE = <telefone do dev>

SERVER_NAME_1 = <nome do servidor>
BASE_URL_SERVER_1 = <url do servidor>

SERVER_NAME_2 = <nome do servidor>
BASE_URL_SERVER_2 = <url do servidor>
```
### Abra dois terminais e inicie os servidores 1 e 2 indo até a pasta deles e digitando:
```node server```
### Abra um terceiro terminal e vá para a raíz do projeto e digite o seguinte comando:
```yarn dev``` ou ```npm run dev```
### Pare um servidor para testar
### Caso se interesse pela api da TotalVoice, segue documentação completa:
https://totalvoice.github.io/totalvoice-docs/#introducao

