const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const { v4: uuidv4 } = require('uuid');

const { constantsConfig } = require('../config');

const getSources = async ({ language }) => {
  try {
    const params = new URLSearchParams();
    params.append('apiKey', constantsConfig.apiKey);
    params.append('language', language);

    const response = await fetch(`${constantsConfig.baseUrl}/sources?${params}`);
    const data = await response.json();

    if (data.status === 'error') {
      throw data;
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSourceById = async ({ sourceId, page = 1 }) => {
  try {
    const params = new URLSearchParams();
    params.append('apiKey', constantsConfig.apiKey);
    params.append('sources', sourceId);
    params.append('page', page);
    params.append('pageSize', 10);

    const response = await fetch(`${constantsConfig.baseUrl}/everything?${params}`);
    const data = await response.json();

    if (data.status === 'error') {
      throw data;
    }

    return {
      ...data,
      articles: data.articles.map((article) => ({ ...article, id: uuidv4() })),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getSources,
  getSourceById,
};
