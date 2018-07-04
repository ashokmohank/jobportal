import React, { PureComponent } from 'react';
import './searchjob.css';

var CONTACTS = [{
  id: 1,
  name: 'iOS App Developer',
  phoneNumber: 'IOS Developer with 7 year experience',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg'
}, {
  id: 2,
  name: 'Android Developer',
  phoneNumber: 'Android Admin with2 year Experience',
  image: 'https://cdn.worldvectorlogo.com/logos/android.svg'
}, {
  id: 3,
  name: 'C# Developer',
  phoneNumber: 'Expert in leading MVVM with C# .net framework',
  image: 'https://cdn.worldvectorlogo.com/logos/windows.svg'
}];

class Contact extends PureComponent{
  render() {
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
};


  class ContactsList extends PureComponent{
    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);

      this.state = { displayedContacts: CONTACTS };
  }
    
    componentDidMount() {
      // Need to set the renderNode since the drawer uses an overlay
      //this.displayedContacts = CONTACTS
    }
    


  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" placeholder="Search Jobs" onChange={this.handleSearch}/>
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
};

export default ContactsList;