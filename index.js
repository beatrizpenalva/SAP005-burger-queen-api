const express = require('express') // chamando o express
const app = express() // criando uma instância do express
const routes = require('./server/routes/index') // uso da rotas para passar pro servidor
const port = 3000 // porta do servidor

//
app.use('/', routes);

//todas as rotas caem aqui
app.get('*', (req, res) => {
  res.send('Hello World!')
})

// vai ficar escutando a porta 3000 do localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/* Arquivo server */
// const http = require('http'); // importando o http pro projeto - para acessar uma API externa
// const port = process.env.PORT || 3000; // armazernar a porta do serviço 
// const server = http.createServer(); // criar o server
// server.listen(port); // vai ficar escutando a porta 3000 do localhost

// Criar um respositório, nesse momento o package.json é criado, arquivo de confguração
// No package.json ficam salvas algumas informações do projeto e toda lib que a gente instala
// Fica salva lá no package.json, tb podemos colocar alguns scripts pra ajudar a gente
// git ignore são pros arquivos que não vão subir pro github
// package.lock.json - resgitros das libs que as libs que eu instalei precisam pra rodar (todas no node modules)