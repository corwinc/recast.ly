var searchYouTube = (options, callback) => {

  var request = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&maxResults= ' + options.max + '&key=' + options.key + '&format=5';

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: request ,
    type: 'GET',
    success: function(data){ console.log("data from on success is", data); callback(); },
    error: function (data) {
  // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to get message', data);
    }
  }); 
};

window.searchYouTube = searchYouTube;
