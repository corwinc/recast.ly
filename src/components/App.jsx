// var App = () => (

// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      playerDisplay: false
    };
  }

  // event listeners
  onEntryClick(e) {
    // this.setState({
    //   playerDisplay: true
    // });
    console.log("CLICKED!", e.target);
    // this.video = e.getVideo();
    // this.render(clickedVid);
  }

  // props.searchYouTube ==== is a function; if invoked, will return data.

  render(video) {

    return (  
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {video || this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList cli={this.onEntryClick.bind(this)} videos={[this.state.video, this.state.video]} />
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
console.log("check 123");