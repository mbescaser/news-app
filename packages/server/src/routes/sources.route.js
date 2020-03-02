const { Router } = require('express');

const { cacheConfig } = require('../config');
const { cacheMiddleware } = require('../middlewares');
const { sourcesService } = require('../services');

const router = Router();

router.get('/', cacheMiddleware, async (req, res) => {
  try {
    const { language } = req.query;
    const data = await sourcesService.getSources({ language });

    cacheConfig.set(req.originalUrl, data);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
});

router.get('/:sourceId', cacheMiddleware, async (req, res) => {
  try {
    const { sourceId } = req.params;
    const { page } = req.query;
    const data = await sourcesService.getSourceById({ sourceId, page });

    cacheConfig.set(req.originalUrl, data);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
});

module.exports = router;
