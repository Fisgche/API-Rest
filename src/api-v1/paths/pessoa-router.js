import express from 'express';
import pessoaModel from '../models/pessoa-model.js';

const pessoaRouter = express.Router();

//pessoaRouter.use('/', (req, res, next) => res.send('ENDPOINT PESSOA'));
pessoaRouter.get('/', ListaPessoas);

function ListaPessoas(req, res, next) {
  pessoaModel.Lista({}, (err, lista) => {
    if (!err) {
        res.json(lista);
    }
    else {
        res.status(400).send(err.message);  
    }
})
      
}

export default pessoaRouter;