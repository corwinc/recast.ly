class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      videos: [exampleVideoData[0], exampleVideoData[1]],
    };
  }

  componentWillMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'kittens'
    };
    window.searchYouTube(options, (data) => { this.setState({'videos': data, 'video': data[0]}); });    
  }

  onEntryClick(video) {
    this.setState({'video': video});
  }

  onSearchSubmit(queryString) {
    var options = {
      query: queryString,
      max: 5, 
      key: YOUTUBE_API_KEY
    };

    var onSuccess = function (data) {
      this.setState({'videos': data, 'video': data[0]});
    };

    window.searchYouTube(options, onSuccess.bind(this));
  }

  render() {
    return (  
      <div>
        <Nav searchSubmit={_.debounce(this.onSearchSubmit.bind(this), 500) }/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList click={this.onEntryClick.bind(this)} videos={ this.state.videos } />
        </div>
      </div>
    );
  }
}
