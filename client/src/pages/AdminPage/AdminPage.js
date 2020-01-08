import React, { Component } from 'react'
import AdminNav from '../../components/AdminNav/AdminNav';
import EventCards from '../../components/EventCards/EventCard';
import axios from 'axios';

class AdminPage extends Component {

  componentDidMount() {
    axios.get('/myEvents').then(results => console.log(results.data));
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