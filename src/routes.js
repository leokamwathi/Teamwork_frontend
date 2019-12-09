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
//WARNING! To be deprecated in React v17. Use componentDidMount instead.

  componentDidMount() {
    // console.log('component_dm', this.state.token, localStorage.getItem('token'));
    // this.setState({token:localStorage.getItem('token')})
    // setTimeout(() => {
    //   this.setState({ token: localStorage.getItem('token') })
    //   console.log('I ROUTER CDM setTimeOUT', this.state.token);
    // }, 2000)
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   // setTimeout(() => {
  //   //   this.setState({ token: localStorage.getItem('token') })
  //   //   console.log('I ROUTER CWM setTimeOUT', this.state.token);
  //   // }, 2000)
  // }

  render() {

    // const singinLink = "/signin"
    // if (!this.state.token){
    //   if (window.location.pathname && (window.location.pathname.split('/')[1] !== 'signin' || window.location.pathname.split('/')[2] !== 'signin')){
    //     return <Redirect to={singinLink}/>
    //   }
    // }
//render={(props) => <Dashboard {...props} isAuthed={true} />}
//render={(props) => <LogoutPage {...props} reponame={this.props.reponame} />}
    return (
        <>
      <NavBar reponame = {this.props.reponame} prop_token={this.state.token}/>
      <Switch>
        {/* FREE */}
        
        <Route path='/signin' component={LoginPage} />
          <Route path='/signout' render={(props) => <LogoutPage {...props} reponame={this.props.reponame} />} />
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