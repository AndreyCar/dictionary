import { Router } from 'express';
var router = Router();

router.get('/', function (req, res, next) {
    res.render('home', { title: 'Dictionary: Home' });
});

export default router;
