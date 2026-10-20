import express from 'express';
import { pingCheck, getHome } from '../../controllers/hey-controller';
import { checkPingMiddleware, checkPingMiddleware2 } from '../../middlewares/ping-middleware';

const pingRouter = express.Router();

//routes:
pingRouter.get('/', (req, res) => {
    res.status(200).send('OK');
});

pingRouter.get('/pingCheck', checkPingMiddleware, checkPingMiddleware2, pingCheck);
pingRouter.get('/hey', getHome);

export default pingRouter;
