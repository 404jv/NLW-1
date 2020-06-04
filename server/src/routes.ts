import { Router } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();
const pointsConstroller = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsConstroller.create);
routes.get('/points', pointsConstroller.index);
routes.get('/points/:id', pointsConstroller.show);

export default routes;  
