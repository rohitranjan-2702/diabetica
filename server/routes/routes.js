const { Router} = require('express');
const Controller = require('../controllers/controller');

const router = Router();


router.get('/signup', Controller.signup_get);
router.post('/signup', Controller.signup_post);

router.get('/login', Controller.login_get);
router.post('/login', Controller.login_post);

router.post('/logout', Controller.logout_get);

router.get('/profile', Controller.profile_get);

module.exports = router;