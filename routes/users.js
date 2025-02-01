import { Router } from 'express';
var router = Router();

router.get('/', function (req, res, next) {
    res.send('Coming soon!');
});

export default router;
