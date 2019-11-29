import React from 'react';
import { Route, Switch } from 'react-router-dom';

// navigation bar
import NavBar from './component/navBar'
// Route Pages
import FeedPage from './pages/feedPage';
import LoginPage from './pages/loginPage';
import LogoutPage from './pages/logoutPage';



class Routes extends React.Component {

      constructor() {
    super();
    const currentToken = localStorage.getItem('token')
    this.state = {
      token: currentToken
    };
  }
    getNavbar(){
        if (!this.state.token){
            return
        }
        return <NavBar/>
    }
  render() {
    return (
        <>
        {this.getNavbar()}
      <Switch>
        <Route exact path='/' component={FeedPage} />
        {/* FREE */}
        <Route path='/signin' component={LoginPage} />
        <Route path='/signout' component={LogoutPage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
      </>
    );
  }
}

export default Routes;