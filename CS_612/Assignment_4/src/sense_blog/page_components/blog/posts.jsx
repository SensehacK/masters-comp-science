import React, { Component } from "react";
import Post from "./post";
import ArticlesData from "../assets/articles.json";

class Posts extends Component {
  state = {
    statePosts: []
  };

  componentWillMount() {
    // setting temporary array back to state
    const posts = [];
    this.props.postsObj.map(post => posts.push(post));

    this.setState({
      statePosts: posts
    });
  }

  render() {
    var { statePosts } = this.state;
    return (
      <div>
        {/* Two Methods of accessing the same data */}

        {/* Local Obj from React State */}
        {/* <div>
          <h2>Hello Kautilya</h2>
          {statePosts &&
            statePosts.map(post => <Post key={post.id} postObj={post} />)}
        </div> */}

        {/* Local JSON import and direct map */}
        <div>
          <h2>Hello Sensehack</h2>
          {ArticlesData &&
            ArticlesData.map((post, key) => <Post key={key} postObj={post} />)}
        </div>
      </div>
    );
  }
}

export default Posts;
