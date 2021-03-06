import React, { PureComponent } from 'react';
import {Card, CardTitle, CardText,
  Button,
  DialogContainer,
  Divider,
  TextField,
  Toolbar,
} from 'react-md';
import CreateProfile from './CreateProfile';
import CreateJob from './CreateJob';
import JobStatus from './JobStatus';
import SearchJob from './SearchJob';
import Configuration from './Configuration';
import Profile from './Profile_c.svg';
import Status from './Status_c.svg';
import jobsearchimg from './jobsearch_c.svg';
import CreateJobImg from './CreateJob.svg';
import FeedbackImg from './Feedback.svg';
import ConfigurationImg from './Configuration.svg';
export default class SimpleFullPageDialog extends PureComponent {
  state = { visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false,
    visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: false, pageX: null, pageY: null };
  showCreateProfile = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: true, visibleJobStatus: false,visibleJobSearch: false,
      visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: false, pageX, pageY });
  };
  showJobStatus = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: true,visibleJobSearch: false,
      visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: false, pageX, pageY });
  };
  showJobSearch = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: true,
      visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: false, pageX, pageY });
  };
  
  showFeedback = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false,
      visibleFeedback: true, visibleConfiguration: false,visibleCreateJob: false, pageX, pageY });
  };
  
  showConfiguration = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false,
      visibleFeedback: false, visibleConfiguration: true,visibleCreateJob: false, pageX, pageY });
  };
  
  showCreateJob = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false,
      visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: true, pageX, pageY });
  };

  hide = () => {
    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false,visibleFeedback: false, visibleConfiguration: false,visibleCreateJob: false });
  };

  render() {
    const { visibleCreateProfile, visibleJobStatus, visibleJobSearch,
      visibleFeedback, visibleConfiguration, visibleCreateJob, pageX, pageY } = this.state;

    return (
        <div className="md-grid md-text-container "> 
        <Card onClick={this.showCreateProfile} className="md-cell"  > 
        <img src={Profile} alt="Profile" />
          <CardTitle title="Profile" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog"
          visible={visibleCreateProfile}
          pageX={pageX}
          pageY={pageY}
          width='400em'
          height='400em'
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <CreateProfile/>
        </DialogContainer>

        <Card onClick={this.showJobSearch} className="md-cell"  > 
        <img src={jobsearchimg} alt="JobSearch" />
          <CardTitle title="JobSearch" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog-1"
          visible={visibleJobSearch}
          pageX={pageX}
          pageY={pageY}
          width='400em'
          height='400em'
          onHide={this.hide}
        >
          <SearchJob/>
        </DialogContainer>
        <Card onClick={this.showJobStatus} className="md-cell"  > 
        <img src={Status} alt="Job status" />
          <CardTitle title="Job Status" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog"
          visible={visibleJobStatus}
          pageX={pageX}
          pageY={pageY}
          width='40em'
          height='40em'
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <JobStatus/>
        </DialogContainer>
        <Card onClick={this.showFeedback} className="md-cell"  > 
        <img src={FeedbackImg} alt="Feedback" />
          <CardTitle title="Feedback" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog-4"
          visible={visibleFeedback}
          pageX={pageX}
          pageY={pageY}
          width='400em'
          height='400em'
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <CreateProfile/>
        </DialogContainer>
        <Card onClick={this.showCreateJob} className="md-cell"  > 
        <img src={CreateJobImg} alt="CreateJob" />
          <CardTitle title="CreateJob" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog-5"
          visible={visibleCreateJob}
          pageX={pageX}
          pageY={pageY}
          width='400em'
          height='400em'
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <CreateJob/>
        </DialogContainer>
        <Card onClick={this.showConfiguration} className="md-cell"  > 
        <img src={ConfigurationImg} alt="Configuration" />
          <CardTitle title="Configuration" /> 
        </Card>
        <DialogContainer
          id="simple-full-page-dialog-6"
          visible={visibleConfiguration}
          pageX={pageX}
          pageY={pageY}
          width='400em'
          height='400em'
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <Configuration/>
        </DialogContainer>
      </div>
    );
  }
}