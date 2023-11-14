const express = require("express")
const exphbs = require("express-handlebars") 

const app = express()

app.engine ('handlabrs' ,exphbs.engine)

app.get('/', (requisicao, resposta) =>{
    resposta.send("Olá mundo")
})

app.listen(3000, () => {
    console.log("Sevidor rodando na parte 3000!")
})
