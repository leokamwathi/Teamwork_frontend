import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// navigation bar
import NavBar from './component/navBar'

// Route Pages
import FeedPage from './pages/feedPage';
import LoginPage from './pages/loginPage';
import LogoutPage from './pages/logoutPage';
import ArticlesPostPage from './pages/articlesPostPage';
import GifsPostPage from './pages/gifsPostPage';
import ArticlesPage from './pages/articlesPage';
import GifsPage from './pages/gifsPage';


class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      tag: '',
      token:localStorage.getItem('token'),
    };
  }
  render() {
    if (!this.state.token){
      if (window.location.pathname !== '/signin'){
        return <Redirect to="/signin"/>
      }
    }

    return (
        <>
      <NavBar/>
      <Switch>
        {/* FREE */}
        <Route path='/signin' component={LoginPage} />
        <Route path='/signout' component={LogoutPage} />
        <Route path='/post-article' component={ArticlesPostPage} />
        <Route path='/post-gif' component={GifsPostPage} />
        <Route path='/articles/:articleId' component={ArticlesPage} />
        <Route path='/gifs/:gifId' component={GifsPage} />
        
        <Route exact path='/' component={FeedPage} />

        <Route
          render={function() {
            return <h1>404 Page Not Found</h1>;
          }} 
        />
      </Switch>
      </>
    );
  }
}

export default Routes;