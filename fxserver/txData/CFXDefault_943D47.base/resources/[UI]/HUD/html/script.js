/* eslint-disable no-undef */
const post = (endpoint, body) => fetch(`https://menu/${endpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(body)
});

$(() => {
  const display = (enable, element) => {
    element = `#${element}`;
    if (enable) {
      $(element).show();
    } else {
      $(element).hide();
    }
  };

  // const closeUI = () => {
  //   post('exit');
  // };

  // const sendError = (error) => {
  //   post('error', error);
  // };

  window.addEventListener('message', (event) => {
    if (event.data) {
      display(event.data.enable, event.data.type);
    }
  });

  display(false, 'speedo');
});
