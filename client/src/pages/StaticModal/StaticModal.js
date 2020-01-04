import React, { Component } from 'react';
import EventNav from "../../components/EventNav/EventNav";
import AdminNav from "../../components/AdminNav/AdminNav"

class StaticModal extends Component {

  render() {
    return (
      <React.Fragment>
      <AdminNav />
      <br/>
      <hr/>
      <hr/>
      <hr/>
      <br/>
      <EventNav />
      <br/>
      <hr/>
      <hr/>
      <hr/>
      <br/>
      </React.Fragment>
    );
  };
};

export default StaticModal;