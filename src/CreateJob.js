import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    FontIcon,
    SVGIcon,
    TextField,
  } from 'react-md';
export default class CreateJob extends Component {

    constructor(props) {
        super(props);
        this.onChangeJobName = this.onChangeJobName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            jobname: '',
            description: ''
        }
    }
    onChangeJobName(v, e) {
        this.setState({
            jobname: v
        });
    }
    onChangeDescription(v, e) {
        console.log(v)
        this.setState({
            description: v
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user_data = {
            jobName: this.state.jobname,
            description: this.state.description,
            designation: 'Software Engineer',
            experience: 3,
            salary: 600000
        }
        axios.post('http://localhost:8080/api/v1/job/create', user_data)
        .then(res => console.log(res.data));
        
        this.setState({
            jobname: '',
            description: ''
        });
    }

    render() {
        return (
            <div className="">
                <h3>Post/Create Job</h3>
                <form className="md-grid" onSubmit={this.onSubmit}>
                    <TextField
                        id="jobname"
                        label="Job Name"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.jobname}  onChange={this.onChangeJobName}
                        />
                    <TextField
                        id="description"
                        label="Job Description"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.description}  onChange={this.onChangeDescription}
                    />
                   
                    <div className="form-group">
                        <input type="submit" value="Post Job" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}