import React, { Component } from "react";
import axios from "axios";
import logo from "../img/logo.png";

export default class List extends Component {
  state = {
    videos: [],
    count: 0,
  };

  componentDidMount() {
    this.fetchVideos();
  }

  fetchVideos = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TR&key=AIzaSyAl4FUf6lZv4ogQe0rWZyzjxQQ3nqOPHaY"
    );

    this.setState({ videos: response.data.items });

    console.log(response.data);
  };

  render() {
    return (
      <div>
        <h1 className="list-h1">
          <p href="" target="_blank">
            <span className="list-h1-red">Youtube</span> Trends
          </p>
        </h1>
        {this.state.videos.map((video) => (
          <div className="list-card" key={video.id}>
            <div className="card-container">
              <div className="card u-clearfix">
                <div className="card-body">
                  <span className="card-number">
                    <img border="0" src={logo} width="80" height="18"></img>
                  </span>
                  <span className="card-author subtle">
                    <i className="video-detail-icon far fa-eye">
                      View {video.statistics.viewCount}
                    </i>
                  </span>
                  <h5 className="card-title">{video.snippet.title}</h5>
                  <span className="card-description subtle">
                    <i className="video-detail-icon far fa-thumbs-up">
                      Like {video.statistics.likeCount}
                    </i>
                  </span>
                  <span className="card-description subtle">
                    <i className="video-detail-icon far fa-thumbs-down">
                      Dislike {video.statistics.dislikeCount}
                    </i>
                  </span>
                  <div className="card-read"><a className="channel-button" href={"https://www.youtube.com/channel/" + video.snippet.channelId}>Go To Channel</a></div>
                </div>
                <div className="video">
                  <iframe
                    title="video"
                    height="200px"
                    src={"https://www.youtube.com/embed/" + video.id}
                  ></iframe>
                </div>
              </div>
              <div className="card-shadow"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
