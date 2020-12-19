import express from 'express';
import mongoose from 'mongoose';

const app = express();

//Conexão com mongodb
mongoose.connect('mongodb://localhost:27017/nodeApi', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

}).catch(e => {
    console.log(`Error: ${e}`)
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./src/routes'));

app.listen(3000, () => {
    console.log('Servidor de Api online!');
});