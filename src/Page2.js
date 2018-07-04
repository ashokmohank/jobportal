import React, { Component } from 'react';

export default class Page2 extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Page 2
        </h2>
        <p className="md-cell md-cell--12 md-text-container">
          Here is some text for the second page. It is quite
          beautiful.
        </p>
      </div>
    );
  }
}

var CONTACTS = [{
  id: 1,
  name: 'Apple',
  phoneNumber: 'IOS',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg'
}, {
  id: 2,
  name: 'Google',
  phoneNumber: 'Android',
  image: 'https://cdn.worldvectorlogo.com/logos/android.svg'
}, {
  id: 3,
  name: 'Microsoft',
  phoneNumber: 'Windows mobile',
  image: 'https://cdn.worldvectorlogo.com/logos/windows.svg'
}, {
  id: 4,
  name: 'Blackberry',
  phoneNumber: 'Blackberry OS',
  image: 'https://cdn.worldvectorlogo.com/logos/bbm-blackberry-messenger.svg'
}];

var Contact = React.createClass({
  render: function() {
    return (
      <li className="contact">
        <img src={this.props.image} width="60px" height="60px" className="contact-image"/>
        <div className="contact-info">
          <div className="contact-name">{this.props.name}</div>
          <div className="contact-number">{this.props.phoneNumber}</div>
        </div>
      </li>
    );
  }
});

var ContactsList = React.createClass({
  getInitialState: function() {
    return {
      displayedContacts: CONTACTS
    };

  },

  handleSearch: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  },

  render: function() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch}/>
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map(function(el) {
              return <Contact 
                key={el.id} 
                name={el.name} 
                phoneNumber={el.phoneNumber} 
                image={el.image}
              />;
            })
          }
        </ul>
      </div>
    );
  }
});

export default ContactsList;