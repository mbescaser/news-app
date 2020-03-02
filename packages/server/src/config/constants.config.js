const baseUrl = `${process.env.NEWSAPI_URL}/${process.env.NEWSAPI_VERSION}`;
const apiKey = process.env.NEWSAPI_KEY;

module.exports = {
  baseUrl,
  apiKey,
};
