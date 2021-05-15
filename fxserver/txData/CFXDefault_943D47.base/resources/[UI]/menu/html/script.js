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
    if (data.which === 27 || (data.which === 77 && !$('#text-box').is(':focus'))) {
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
      .then((resp) => {
        display(false);
        return resp.json();
      });
  });

  const populateMenu = () => {
    const options = [
      { id: 'spawn-vehicle', label: 'Spawn Vehicle' },
      { id: 'get-coordinates', label: 'Get coordinates' }
    ];
    const generatedList = options.map((option) => `<li id="menu-options-${option.id}" class="menu-item" tabindex="0">${option.label}</li>`);
    $('#menu-options').append(generatedList);
  };

  populateMenu();

  $('#menu-options').focus(() => {
    console.log($('#menu-options').is(':focus'));
  });

  display(false);
});
