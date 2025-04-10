const app = require('./src/app');
const PORT = process.env.PORT || 3000;

//app.on('conectado',() =>{
    app.listen(PORT, () => {
        console.log(`🚀 Aplicação rodando em: http://localhost:${PORT}`);
    })
//});