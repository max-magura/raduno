import React, { Component } from 'react';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import RsvpForm from "../../components/RsvpForm/RsvpForm";
import EventInfo from "../../components/EventInfo/EventInfo";

class StaticModal extends Component {
  render() {
    return (
      <React.Fragment>
      <CreateEvent />
      <br/>
      <hr/>
      <hr/>
      <hr/>
      <br/>
      <RsvpForm />
      <br/>
      <hr/>
      <hr/>
      <hr/>
      <br/>
      <EventInfo />
      </React.Fragment>
    );
  };
};

export default StaticModal;