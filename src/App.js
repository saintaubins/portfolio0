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

import botsmiley from "./assets/botsmiley.jpg";



export const App = () => {
  const [data, setData] = useState({ hits: [] });

  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  }

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
              {showBot && (

                <Chatbot 
                config={config} 
                messageParser={MessageParser} 
                actionProvider={ActionProvider}
                saveMessages={saveMessages}
                messageHistory={loadMessages()} 
                />
              )}
              <center>
                <button style={{'marginBottom':'10px','borderRadius':'10px','marginRight':'10px'}} onClick={() => toggleBot((prev) => !prev)}>
                  <img src={botsmiley} style={{
                    'width': '50px', 
                    'height':'auto',
                    'marginBottom':'5px'
                    }}
                    />
                </button>
              </center>
            </div>
      </React.Fragment>
      
       
      
    );
}
export default App;
