import React, { Component } from 'react'; 
import ServerUpload from './components/ServerUpload'
import {
    Card, CardTitle, CardText,
    Button,
    FontIcon,
    SVGIcon,
    TextField,
    Autocomplete,
    DialogContainer,
    Divider,
    Toolbar
} from 'react-md';

import { programmingLanguages } from 'constants'
export default class JobStatus extends Component {

    render() {
        return (
            <div className="">
                <h3>Number of Jobs applied: 1</h3>
                <div className="md-grid ">
                    <Card className="md-cell"  >
                        <CardTitle title="Business Analyst" />
                        <CardText>
                            Your Application is being review by HR team
                        </CardText>
                    </Card>
                </div>
                <div className="form-group">
                    <ServerUpload />
                </div>
            </div>
        )
    }
}