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
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            jobname: '',
            description: '',
            designation: '',
            experience: 0,
            salary: 0
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
    onChangeDesignation(v, e) {
        console.log(v)
        this.setState({
            designation: v
        });
    }
    onChangeExperience(v, e) {
        console.log(v)
        this.setState({
            experience: v
        });
    }
    onChangeSalary(v, e) {
        console.log(v)
        this.setState({
            salary: v
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user_data = {
            jobName: this.state.jobname,
            description: this.state.description,
            designation: this.designation,
            experience: this.experience,
            salary: this.salary
        }
        axios.post('http://localhost:8080/api/v1/job/create', user_data)
        .then(res => console.log(res.data));
        
        this.setState({
            jobname: '',
            description: '',
            designation: '',
            experience: 0,
            salary: 0
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
                        className="md-cell md-cell--12"
                        value={this.state.jobname}  onChange={this.onChangeJobName}
                        />
                    <TextField
                        id="description"
                        label="Job Description"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--12"
                        value={this.state.description}  onChange={this.onChangeDescription}
                    />
                    <TextField
                        id="experience"
                        label="Experience"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.experience}  onChange={this.onChangeExperience}
                    />
                    <TextField
                        id="designation"
                        label="Designation"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--6"
                        value={this.state.designation}  onChange={this.onChangeDesignation}
                    />
                   <TextField
                        id="salary"
                        label="Salary"
                        leftIcon={<FontIcon>perm_identity</FontIcon>}
                        inlineIndicator={<Button icon className="text-fields__inline-btn">clear</Button>}
                        className="md-cell md-cell--12"
                        value={this.state.salary}  onChange={this.onChangeSalary}
                    />
                    <div className="form-group">
                        <input type="submit" value="Post Job" className="fa fa-hand-spock-o"/>
                    </div>
                </form>
            </div>
        )
    }
}