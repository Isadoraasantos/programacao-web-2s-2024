const express = require('expres');
const app = expres();

app.enginer('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res)=>{
    res.render('index.html');
});
    const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app executando na porta ' + PORT)
})

