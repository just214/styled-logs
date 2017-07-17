import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

// components
import Header from './components/Header';
import Demo from './components/Demo';
import AnnotatedSource from './components/AnnotatedSource';

const Container = styled.div`
  margin: 20px;
`;

const StyledRoutes = styled.div`
  background: #333;
  color: white;
  border-radius: 10px;
  padding: 10px;
  height: auto;
`;

const Routes = _=> 
<Container>
  <Router>
    <div>
     <Header />
    <Switch>
      <StyledRoutes>
      <Route exact path="/" component={Demo} />
      <Route path="/code" component={AnnotatedSource} />
      </StyledRoutes>
      <Route path="*" render={_=> <h1>not found</h1>} />
    </Switch>
    </div>
  </Router>
</Container>

export default Routes;
