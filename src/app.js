// Include required libs
var ajax = require('ajax');
var UI = require('ui');

// Global settings
var email = 'jstark@jonathanstark.com';
var url = 'http://getkilo.com/pebble/json2.php?email=' + email;

// Define the view
var card = new UI.Card({
  title: 'Kilo for Pebble',
  body: 'Loading...',
  scrollable: true
});

// Show the view
card.show();

// Load data on launch
getJson();

// Listen for clicks to refresh data on demand
card.on('click', getJson);

// Get the json data
function getJson() {
  ajax({ url: url, type: 'json' },
    function(data) {
      card.title(data.title);
      card.body(data.body);
    }
  );
}
