## Projeto de monitoramento de servidores

### clone o projeto: <strong>git clone <url></strong>
### Instale as dependências: <strong>yarn</strong> ou <strong>npm install</strong>
### Crie uma conta na <strong><a href="https://api2.totalvoice.com.br/painel/signup.php">Total Voice</a></strong>
### Crie um arquivo .env na raíz do projeto e preencha com os seguintes dados:
```javascript
APP_URL = http://localhost:3333
NODE_ENV = development

TOTALVOICE_KEY = <access_token criado para seu usuário (consegue ser visualizado no painel da Total Voice)>

DEVELOPER_NAME = <nome do dev>
DEVELOPER_PHONE = <telefone do dev>

SERVER_NAME_1 = <nome do servidor>
BASE_URL_SERVER_1 = <url do servidor>

SERVER_NAME_2 = <nome do servidor>
BASE_URL_SERVER_2 = <url do servidor>
```
### Abra dois terminais e inicie os servidores 1 e 2 indo até a pasta deles e digitando <strong>node server</strong>
### Abra um terceiro terminal e vá para a raíz do projeto e digite o seguinte comando <strong>yarn dev</strong> ou <strong>npm run dev</strong>
### Pare um servidor para testar

