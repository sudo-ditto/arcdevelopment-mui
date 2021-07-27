import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/Theme';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/ui/Header';
import Home from './Home';
import Footer from '../components/ui/Footer';
// Removes default margin for elements underneath
// E.g solves elements not expanding full width due to body margin
import { CssBaseline } from '@material-ui/core';
import CustomSoftware from './CustomSoftware';
import Services from './Services';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/customSoftware" component={CustomSoftware} />
        <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
        <Route path="/websites" component={() => <div>Websites</div>} />
        <Route path="/revolution" component={() => <div>revolution</div>} />
        <Route path="/about" component={() => <div>About</div>} />
        <Route path="/contact" component={() => <div>Contact</div>} />
        <Route path="/estimate" component={() => <div>Estimate</div>} />
      </Switch>
      <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </ThemeProvider>
  );
}

export default App;
