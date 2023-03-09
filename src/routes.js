import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './Controllers/SessionController';
import HouseController from './Controllers/HouseController';
import DashBoardController from './Controllers/DashBoardController';
import ReserveController from './Controllers/ReserveController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.storage);
routes.get('/houses', HouseController.index);
routes.post('/houses', upload.single('thumbnail'), HouseController.storage);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.delete);
routes.get('/dashboard', DashBoardController.show);
routes.post('/houses/:house_id/reserve', ReserveController.storage);
routes.get('/reservers', ReserveController.index);
routes.delete('/reservers/cancel', ReserveController.destroy);

export default routes;
