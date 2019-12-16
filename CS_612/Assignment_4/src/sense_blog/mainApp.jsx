import React, { Component } from "react";
import Main from "./page_components/main";
import Header from "./page_components/header";
import Nav from "./page_components/nav";
import Social from "./page_components/social";
import Footer from "./page_components/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";

class MainApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Social />
        <Header />
        <section>
          <Main />
          <Nav />
        </section>
        <Social />
        <h1 className="sensehack">Hello Sensehack!</h1>
        <Footer />
      </div>
    );
  }
}

export default MainApp;
