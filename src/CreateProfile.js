import React, { Component } from 'react';
import axios from 'axios';
import ServerUpload from './components/ServerUpload'
import {
    Button,
    FontIcon,
    SVGIcon,
    TextField,
  } from 'react-md';
export default class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: ''
        }
    }
    onChangeFirstName(v, e) {
        this.setState({
            firstname: v
        });
    }
    onChangeLastName(v, e) {
        this.setState({
            lastname: v
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user_data = {
            firstName: this.state.firstname,
            lastName: this.state.lastname
        }
        axios.post('http://localhost:8081/api/v1/user/create', user_data)
        .then(res => console.log(res.data));
        
        this.setState({
            firstname: '',
            lastname: ''
        });
    }

    render() {
        return (
            <div className="">
                <h3>Create Profile</h3>
                <form className="md-grid" onSubmit={this.onSubmit}>
                    <TextField
                        id="firstname"
                        label="First Name"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.firstname}  onChange={this.onChangeFirstName}
                        />
                    <TextField
                        id="lastname"
                        label="Last Name"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.lastname}  onChange={this.onChangeLastName}
                    />
                   
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
                <div className="form-group">
                        <ServerUpload/>
                    </div>
            </div>
        )
    }
}