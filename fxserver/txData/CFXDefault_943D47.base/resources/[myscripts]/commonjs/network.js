/* eslint-disable import/prefer-default-export */
const post = (endpoint, body) => fetch(`https://menu/${endpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(body)
});

module.exports = {
  post
};
