import React, { Component } from "react";
import Header from "./sections/header/";
import Hero from "./sections/hero/";

import Footer from "../../component/footer/";
class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero {...this.props} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
