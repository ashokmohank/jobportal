
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Drawer, Toolbar } from 'react-md';
import NavLink from './NavLink';
import Home from './Home';
import JobStatus from './JobStatus';
import SearchJob from './SearchJob';
import Configuration from './Configuration';
import CreateProfile from './CreateProfile';
import CreateJob from './CreateJob';
import Analytics from './Analytics';
import logo from './logo.svg';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'JobStatus',
  to: '/jobstatus',
  icon: 'bookmark',
}, {
  label: 'SearchJob',
  to: '/SearchJob',
  icon: 'donut_large',
}, {
  label: 'Configuration',
  to: '/configuration',
  icon: 'settings',
}, {
  label: 'Create Profile',
  to: '/profile',
  icon: 'account_box',
}, {
  label: 'Create Job',
  to: '/createjob',
  icon: 'work',
}, {
  label: 'Analytics',
  to: '/analytics',
  icon: 'assessment',
}];

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };
  state = { visible: false };

  componentDidMount() {
    // Need to set the renderNode since the drawer uses an overlay
    this.dialog = document.getElementById('drawer-routing-example-dialog');
  }

  showDrawer = () => {
    this.setState({ visible: true });
  };

  hideDrawer = () => {
    this.setState({ visible: false });
  };

  handleVisibility = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { location } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Toolbar colored fixed title="Verizon Talent Aquisition" nav={<Button icon onClick={this.showDrawer}>menu</Button>} />
        <CSSTransitionGroup
          component="div"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
          className="md-toolbar-relative"
        >
          <Switch key={location.pathname}>
            <Route path={navItems[0].to} exact component={Home} />
            <Route path={navItems[1].to} component={JobStatus} />
            <Route path={navItems[2].to} component={SearchJob} />
            <Route path={navItems[3].to} component={Configuration} />
            <Route path={navItems[4].to} component={CreateProfile} />
            <Route path={navItems[5].to} component={CreateJob} />
             <Route path={navItems[6].to} component={Analytics} />
          </Switch>
        </CSSTransitionGroup>
        <Drawer
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          onVisibilityChange={this.handleVisibility}
          header={<img src={logo} className="App-logo" alt="Verizon Talent Aquisition- by Code Squad" />}
          renderNode={this.dialog}
          navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
        />
      </div>
    );
  }
}
export default withRouter(App);