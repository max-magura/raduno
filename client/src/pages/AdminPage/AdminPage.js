import React, { Component } from 'react'
import AdminNav from '../../components/AdminNav/AdminNav';
import EventCards from '../../components/EventCards/EventCard';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <EventCards />
      </div>
    )
  }
}

export default AdminPage;