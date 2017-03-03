'use strict';

/**
 * Module dependencies
 */

// Public dependencies
const fetch = require('node-fetch');

module.exports = async (url, token) => {
  const res = await fetch(`${url}/subscriptions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  return await res.json();
};
