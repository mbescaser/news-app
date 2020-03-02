const { Router } = require('express');

const sourcesRoute = require('./sources.route');

const router = Router();

router.use('/sources', sourcesRoute);

module.exports = router;
