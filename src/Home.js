import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Users from './Users';
class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    
    render() {
        const isAuthenticated=this.props.isAuthenticated;
        return (
            <div>
                {isAuthenticated ?
                <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/users">Users</Link>
                      </li>
                    </ul>
                  </nav>
          
                  {/* A <Switch> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/users">
                      <Users />
                    </Route>
                    
                  </Switch>
                </div>
              </Router> :
                null
            }
            </div>
            
        );
    }
}

export default Home;