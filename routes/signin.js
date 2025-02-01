import { Router } from 'express';
var router = Router();

router.get('/', function (req, res, next) {
    res.render('signin', { title: 'Dictionary: Sign In' });
});

export default router;
