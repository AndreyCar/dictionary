import { Router } from 'express';
var router = Router();

router.get('/', function (req, res, next) {
    res.render('signup', { title: 'Dictionary: Sign Up' });
});

export default router;
