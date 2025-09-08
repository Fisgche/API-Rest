import express from 'express';
import pessoaRouter from './paths/pessoa-router.js';
import organizacaoRouter from './paths/organizacao-router.js';

const apiRouter = express.Router();

apiRouter.use('/pessoas', pessoaRouter);
apiRouter.use('/organizacoes', organizacaoRouter);
apiRouter.use('/', (req, res, next) => res.send('API v1 Root'));

export default apiRouter;