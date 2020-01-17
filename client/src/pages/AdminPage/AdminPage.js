import React, { Component } from 'react'
import AdminNav from '../../components/AdminNav/AdminNav';
import EventCards from '../../components/EventCards/EventCard';

class AdminPage extends Component {
  componentDidMount() {
    if (sessionStorage.getItem('userInfo') === null) {
      window.location.href = '/';
    }
  }
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