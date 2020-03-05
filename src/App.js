import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { useTransition, animated } from 'react-spring';
import './App.css';




const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: "translateX(100%)" },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-50%)" }
  });
    return (
      <React.Fragment>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path='/projects'component={Projects} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </animated.div>
            ))}  
          </Layout>
      </React.Fragment>
    );
}
export default App;
