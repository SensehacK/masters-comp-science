import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Post from "./blog/post";
import Posts from "./blog/posts";
import ArticlesData from "./assets/articles.json";
class Main extends Component {
  state = {
    // Copying the JSON directly to this state object (Spread operator)
    blog: [...ArticlesData]
  };

  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Posts postsObj={this.state.blog} />}
            />
            <Route
              path="/post1"
              render={props => <Post postObj={this.state.blog[0]} />}
            />
            <Route
              path="/post2"
              render={props => <Post postObj={this.state.blog[1]} />}
            />
            <Route
              path="/post3"
              render={props => <Post postObj={this.state.blog[2]} />}
            />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default Main;
