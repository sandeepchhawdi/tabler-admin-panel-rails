noUiSlider.create(document.getElementById('range-simple'), {
  start: 20,
  connect: [true, false],
  step: 10,
  range: {
    min: 0,
    max: 100
  }
});


noUiSlider.create(document.getElementById('range-connect'), {
  start: [60, 90],
  connect: [false, true, false],
  step: 10,
  range: {
    min: 0,
    max: 100
  }
});


noUiSlider.create(document.getElementById('range-color'), {
  start: 40,
  connect: [true, false],
  step: 10,
  range: {
    min: 0,
    max: 100
  }
});


document.addEventListener("DOMContentLoaded", function () {
  window.Litepicker && (new Litepicker({
    element: document.getElementById('datepicker-default'),
    buttonText: {
      previousMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
      nextMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  window.Litepicker && (new Litepicker({
    element: document.getElementById('datepicker-icon'),
    buttonText: {
      previousMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
      nextMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  window.Litepicker && (new Litepicker({
    element: document.getElementById('datepicker-icon-prepend'),
    buttonText: {
      previousMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
      nextMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  window.Litepicker && (new Litepicker({
    element: document.getElementById('datepicker-inline'),
    buttonText: {
      previousMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
      nextMonth: `<!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
    },
    inlineMode: true,
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-tags'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-tags-advanced'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-users'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-people'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-countries'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-labels'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-countries-valid'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


document.addEventListener("DOMContentLoaded", function () {
  var el;
  window.TomSelect && (new TomSelect(el = document.getElementById('select-countries-invalid'), {
    copyClassesToDropdown: false,
    dropdownClass: 'dropdown-menu',
    optionClass: 'dropdown-item',
    controlInput: '<input>',
    render: {
      item: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
      option: function (data, escape) {
        if (data.customProperties) {
          return '<div><span class="dropdown-item-indicator">' + data.customProperties + '</span>' + escape(data.text) + '</div>';
        }
        return '<div>' + escape(data.text) + '</div>';
      },
    },
  }));
});


let sliderTriggerList = [].slice.call(document.querySelectorAll("[data-slider]"));
sliderTriggerList.map(function (sliderTriggerEl) {
  let options = {};
  if (sliderTriggerEl.getAttribute("data-slider")) {
    options = JSON.parse(sliderTriggerEl.getAttribute("data-slider"));
  }
  let slider = noUiSlider.create(sliderTriggerEl, options);
  if (options['js-name']) {
    window[options['js-name']] = slider;
  }
});
