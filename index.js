const express = require('express');
const app = express();
const uploadImg = require('./multer/uploadImg');

app.set('view engine', 'ejs') //Chama a engine para poder exibir arquivos ejs...

app.post('/upload-img', uploadImg.single('file'), async (req, res) => { 

    if(req.file){
        return res.render('index')    
    }

    return res.status(404).json({
        erro: true,
        msg: 'Erro: Não foi possível enviar o arquivo'
    })
    
});


app.get('/', (req, res)=>{
    res.render("index"); //Indica qual page vc quer que exiba...
});

app.listen(8080, ()=>{
    console.log('Servidor rodando!'); //Abre a porta para o servidor...
});
