import React, { Component } from 'react';
import './home.scss';
import logo from './logo.svg';
import Profile from './Profile.svg';
import Status from './Status.svg';
import JobSearch from './JobSearch.svg';
import { Card, CardTitle, CardText } from 'react-md';

export default class Home extends Component {
  render() {
    return ( 
      <div className="md-grid md-text-container"> 
       
        <Card className="md-cell" style={{'align-items': 'center'}} > 
        <img src={Profile} alt="Profile" />
          <CardTitle title="Profile" /> 
        </Card>  
        <Card className="md-cell">
        <img src={JobSearch} alt="JobSearch" />
          <CardTitle title="Jobs" /> 
        </Card>
        <Card className="md-cell">
        <img src={Status} alt="" />
          <CardTitle title="Status" /> 
        </Card> 
        </div>  
    );
  }
}
