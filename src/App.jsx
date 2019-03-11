import React, { Component } from 'react';
import Header from './components/Common/Header.jsx';
import Footer from './components/Common/Footer.jsx';
import ActivityFeed from './Pages/Activity/ActivityFeedContainer.jsx';
import ActivityDetail from './Pages/Activity/ActivityDetailContainer.jsx';
import { clearInterval } from 'timers';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  async componentDidMount() {
    await this.props.getActivities();
    this.interval = setInterval(this.props.getActivities, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { activities } = this.props;
    
    return (<Router>
              <div className='container'>
                <Header />
                  <div className="container-view">
                    <Route path="/" exact render={props => <ActivityFeed {...props} /> } />
                    <Route path="/:id" render={props => <ActivityDetail {...props}  /> } />
                  </div>
                <Footer activities={activities} />
              </div>
            </Router>);
  }
};

export default App;
