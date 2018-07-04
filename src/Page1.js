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
import Profile from './Profile.svg';
import Status from './Status.svg';
import JobSearch from './JobSearch.svg';
export default class SimpleFullPageDialog extends PureComponent {
  state = { visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false, pageX: null, pageY: null };
  showCreateProfile = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: true, visibleJobStatus: false,visibleJobSearch: false, pageX, pageY });
  };
  showJobStatus = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: true,visibleJobSearch: false, pageX, pageY });
  };
  showJobSearch = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: true, pageX, pageY });
  };
  
  hide = () => {
    this.setState({ visibleCreateProfile: false, visibleJobStatus: false,visibleJobSearch: false });
  };

  render() {
    const { visibleCreateProfile, visibleJobStatus, visibleJobSearch, pageX, pageY } = this.state;

    return (
        <div className="md-grid "> 
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
        <img src={JobSearch} alt="JobSearch" />
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
          aria-labelledby="simple-full-page-dialog-title-1"
        >
          <CreateJob/>
        </DialogContainer>
      </div>
    );
  }
}