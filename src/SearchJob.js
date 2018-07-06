
import React, { PureComponent } from 'react';
import axios from 'axios';
import searchJobImg from './JobSearch.svg'
import './searchjob.css';


class Contact extends PureComponent{
  

  render() {
    return (
      <li className="contact">
        <img src={searchJobImg} width="60px" height="60px" className="contact-image"/>
        <div className="contact-info">
          <div className="contact-name">{this.props.jobName}</div>
          <div className="contact-number">{this.props.description}</div>
        </div>
      </li>
    );
  }
};


  class ContactsList extends PureComponent{
    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);

      this.state = { jobPostings: [] };
    }


  componentDidMount() {

    var that = this;
    axios
      .get(
        "http://localhost:8080/api/v1/job/list",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(response) {
        console.log(response.data);
        // handle success
        that.setState({ jobPostings: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }  


  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var jobPostings = this.state.jobPostings.filter(function(el) {
      var searchValue = el.jobName.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      jobPostings: jobPostings
    });
    if(searchQuery === ""){
      var that = this;
    axios
      .get(
        "http://localhost:8080/api/v1/job/list",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(response) {
        console.log(response.data);
        // handle success
        that.setState({ jobPostings: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    }
  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" placeholder="Search Jobs" onChange={this.handleSearch}/>
        <ul className="contacts-list">
          {
            this.state.jobPostings.map(function(el) {
              return <Contact 
                key={el._id} 
                jobName={el.jobName} 
                description={el.description} 
                image={el.image}
              />;
            })
          }
        </ul>
      </div>
    );
  }
};

export default ContactsList;