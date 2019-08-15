import React, { Component } from 'react';
import { TweetBody } from './components/tweet.js'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="main-body">
        <TweetBody 
          name="renato cantarino"
          handle="@renatocantarino"
          tweet="ola ola ola ola ola ola"/>
      </div>
    );
  }
}

export default Feed