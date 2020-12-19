import { Router } from 'express';
import testeController from './controllers/testeController';

const routes = new Router();

routes.get('/tasks', testeController.index);
routes.post('/tasks', testeController.create);

module.exports = routes;