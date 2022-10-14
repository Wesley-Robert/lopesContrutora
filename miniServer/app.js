const express = require('express');
const app = express();

app.post("/upload-image", async (req, res)=>{
    /*return res.status(400).json({
            erro: true,
            mensagem: "Erro: Upload não realizado com sucesso!"
        });*/
    return res.json({
        erro: false,
        mensagem: "Upload realizado com sucesso!"
    });
});

app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
