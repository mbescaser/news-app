const { cacheConfig } = require('../config');

const cacheMiddleware = (req, res, next) => {
  const data = cacheConfig.get(req.originalUrl);

  if (data) {
    res.json(data);
  } else {
    next();
  }
};

module.exports = cacheMiddleware;
