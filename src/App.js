import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import Pages
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ProjectPage from './pages/projects';
import ResumePage from './pages/resume'
import NotFound from './pages/404';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path='/about' component={AboutPage} />    
          <Route exact path='/projects' components={ProjectPage} />
          <Route exact path='/resume' components={ResumePage} />
          <Route exact path='/404' component={NotFound}/> {/* Default Render */}
          <Redirect to='/404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
