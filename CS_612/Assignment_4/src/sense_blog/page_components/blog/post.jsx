import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {};

  render() {
    var { postObj } = this.props;

    return (
      <div className="postComponent">
        <Link to={`/post${postObj.id}`}>
          <div className="title">
            <span>Title: {postObj.title}</span>
          </div>
        </Link>
        <div className="date">
          <span>Date: {postObj.date}</span>
        </div>
        <div className="postImage">
          <img src={postObj.imgURL} alt="" />
        </div>
        <div className="summary">
          <span>Summary: {postObj.summary}</span>
        </div>
        <div className="body">
          <span>{postObj.body}</span>
        </div>
        <div className="link">
          <span>Hosted on: </span>
          <a href={postObj.ogUrl} target="_blank">
            {postObj.ogUrl}
          </a>
        </div>
        <hr />
      </div>
    );
  }
}

export default Post;
