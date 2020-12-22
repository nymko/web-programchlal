import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';
import {
  Grid, Paper
} from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle = (title) => {
    this.setState({
      title: title
    })
  };

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar title={this.state.title}/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
            <UserList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
            <Switch>
              <Route path="/users/:userId"
                render={ props => <UserDetail {...props} setData={this.changeTitle} /> }
              />
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} setData={this.changeTitle} /> }
              />
              <Route path="/users" component={UserList} setData={this.changeTitle} />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);