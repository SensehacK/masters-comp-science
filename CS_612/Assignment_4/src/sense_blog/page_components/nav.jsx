import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";

class Nav extends Component {
  state = {
    statePosts: [],
    isLoaded: false
  };

  componentDidMount() {
    // Getting environment instance using do "npm install --save dotenv" & create ".env" file
    // var apiKey = process.env.REACT_APP_GOOGLE_NEWS_API_KEY;
    var url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.REACT_APP_GOOGLE_NEWS_API_KEY;

    setInterval(async () => {
      // Without using await keyword, async programming
      const newsApi = fetch(url)
        .then(data => data.json())
        .then(articles => articles["articles"]);
      // Unwrapping the data of a async promise
      newsApi.then(jsonD => {
        console.log(jsonD);
        this.setState({
          statePosts: jsonD,
          isLoaded: true
        });
      });
    }, 5000);
  }

  render() {
    const { statePosts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <nav>
          <div>
            <ul>
              <HashRouter>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
              </HashRouter>
              {statePosts &&
                statePosts.map((post, key) => <li key={key}>{post.title}</li>)}
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <aside>
          <h2>Network Request Loading</h2>
        </aside>
      );
    }
  }
}

export default Nav;
