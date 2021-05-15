/* eslint-disable no-undef */
$(document).ready(() => {
  // Functions
  // Fuel
  const setProgressFuel = (percent, element) => {
    const circle = document.querySelector(element);
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const html = $(element).parent().parent().find('span');

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (((-percent * 73) / 100) / 100) * circumference;
    circle.style.strokeDashoffset = -offset;

    html.text(Math.round(percent));
  };

  // Speed
  const setProgressSpeed = (value, element) => {
    const circle = document.querySelector(element);
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const html = $(element).parent().parent().find('span');
    const percent = (value * 100) / 220;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (((-percent * 73) / 100) / 100) * circumference;
    circle.style.strokeDashoffset = -offset;

    html.text(value);
  };

  // setProgress(input.value,element);
  // setProgressFuel(85,'.progress-fuel');
  // setProgressSpeed(124,'.progress-speed');

  window.addEventListener('message', (event) => {
    // Show HUD when player enter a vehicle
    if (event.data.showhud === true) {
      $('.huds').fadeIn();
      setProgressSpeed(event.data.speed, '.progress-speed');
    }
    if (event.data.showhud === false) {
      $('.huds').fadeOut();
    }

    // Fuel
    if (event.data.showfuel === true) {
      setProgressFuel(event.data.fuel, '.progress-fuel');
      if (event.data.fuel <= 20) {
        $('.progress-fuel').addClass('orangeStroke');
      }
      if (event.data.fuel <= 10) {
        $('.progress-fuel').removeClass('orangeStroke');
        $('.progress-fuel').addClass('redStroke');
      }
    }

    // Lights states
    if (event.data.feuPosition === true) {
      $('.feu-position').addClass('active');
    }
    if (event.data.feuPosition === false) {
      $('.feu-position').removeClass('active');
    }
    if (event.data.feuRoute === true) {
      $('.feu-route').addClass('active');
    }
    if (event.data.feuRoute === false) {
      $('.feu-route').removeClass('active');
    }
    if (event.data.clignotantGauche === true) {
      $('.clignotant-gauche').addClass('active');
    }
    if (event.data.clignotantGauche === false) {
      $('.clignotant-gauche').removeClass('active');
    }
    if (event.data.clignotantDroite === true) {
      $('.clignotant-droite').addClass('active');
    }
    if (event.data.clignotantDroite === false) {
      $('.clignotant-droite').removeClass('active');
    }
  });
});
