const router = require('express').Router();

const cardController = require('../Controllers/controller');

router.route('/proverbs').post((req, res) => cardController.addCard(req, res));
router.route('/proverbs/:id').delete((req, res) => cardController.delete(req, res));
router.route('/proverbs/all').get((req, res) => cardController.getAll(req, res));
router.route('/proverbs/random').get((req, res) => cardController.random(req, res));
router.route('/proverbs').get((req, res) => cardController.pagination(req, res));

module.exports = router;