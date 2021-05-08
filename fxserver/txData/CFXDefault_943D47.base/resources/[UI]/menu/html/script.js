/* eslint-disable no-undef */
const post = (endpoint, body) => fetch(`https://menu/${endpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(body)
});

$(() => {
  const display = (enable) => {
    if (enable) {
      $('#container').show();
    } else {
      $('#container').hide();
    }
  };

  const closeUI = () => {
    $('#text-box').val('');
    post('exit');
  };

  const sendError = (error) => {
    post('error', error);
  };

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'menu') {
      display(event.data.enable);
    }
  });

  document.onkeyup = (data) => {
    if (data.which === 27) {
      closeUI();
    }
  };

  $('#close-button').click(() => {
    closeUI();
  });

  $('#confirm-button').click((event) => {
    const input = $('#text-box').val();
    if (!input) {
      sendError('no input');
    }
    if (input.length >= 100) {
      sendError('input was too long');
    }
    post('main', { text: input })
      .catch((e) => console.log(e))
      .then((resp) => resp.json());
    display(false);
  });

  display(false);
});
