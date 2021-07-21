import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/Theme';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>}/>
        <Route path="/services" component={() => <div>Services</div>}/>
        <Route path="/customSoftware" component={() => <div>Custom Software</div>}/>
        <Route path="/mobileapps" component={() => <div>Mobile Apps</div>}/>
        <Route path="/websites" component={() => <div>Websites</div>}/>
        <Route path="/revolution" component={() => <div>revolution</div>}/>
        <Route path="/about" component={() => <div>About</div>}/>
        <Route path="/contact" component={() => <div>Contact</div>}/>
        <Route path="/estimate" component={() => <div>Estimate</div>}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
