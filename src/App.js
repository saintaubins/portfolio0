import React from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { Home } from './Home';
import { Skills } from './Skills';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
//import { useTransition, animated } from 'react-spring';
import './App.css';




export const App = () => {
  //const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //     from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //     leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  // });
    return (
      <React.Fragment>
          <NavigationBar />
          <Jumbotron />
            {/* {transitions.map(({ item, props, key }) => ( */}
              {/* <animated.div key={key} style={props}> */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path='/projects'component={Projects} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              {/* </animated.div> */}
            {/* ))}   */}
      </React.Fragment>
    );
}
export default App;
