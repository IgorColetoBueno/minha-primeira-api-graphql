import app from './app';

app.listen(3000, () => {
    console.log("Deu certo!")
})

app.get('/teste', (req:any, res:any)=> {
    res.send("Teste")
})