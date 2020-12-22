import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Skills } from './Skills';
import { Resume } from './Resume';
import { Contact } from './Contact';

import { Projects } from './Projects';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import './App.css';
import axios from 'axios';
import Chatbot from 'react-chatbot-kit';

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";




export const App = () => {
  const [data, setData] = useState({ hits: [] });

  //const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //     from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //     leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  // });

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        const result = await axios.get(
          'https://still-river-88047.herokuapp.com/portfolio0.herokuapp.com/', {
            headers: {
              'Test-Header': 'test-value'
            }
          }
        ).then(res => {
          console.log('res.data = ',res.data);
          setData(res.data);
          console.log('data.hits = ',data.hits)
        }).catch(err => console.error(err))
        console.log('result = ',result)
      };
      fetchData();
    }, (60000*30));
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://still-river-88047.herokuapp.com/portfolio0.herokuapp.com/', {
          headers: {
            'Test-Header': 'test-value'
          }
        }
      ).then(res => {
        console.log('res.data = ',res.data);
        setData(res.data);
      }).catch(err => console.error(err))
    };
    fetchData();
  }, [])

    return (
      <React.Fragment>
          <NavigationBar />
          <Jumbotron />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path='/projects'component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <div className="chatbot">
              <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
            </div>
      </React.Fragment>
      
       
      
    );
}
export default App;
