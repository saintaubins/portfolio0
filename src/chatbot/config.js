import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from "./Todos";

const botName = "Bot Bot"

const config = {
    lang: "no",
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hello, my name is ${botName}.`),
        createChatBotMessage(`How can I help you?`),
        createChatBotMessage(`Please excuse me I am a work in progress.`)
    ],
    customComponents: {
        header: () => <div style={{backgroundColor: "rgba(48,99,66,0.8)", padding: "5px",
        textAlign: "center", borderRadius: "3px",}}>Hello there</div>
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "rgba(219,169,61,0.9)",
        },
        chatButton: {
            backgroundColor: "rgba(48,99,66,0.8)",
        },
    },
    state: {
        todos: []
    },
    widgets: [
        {
            widgetName: "todos",
            widgetFunc: (props) => <Todos {...props} />,
            mapStateToProps: ["todos"],
            delay: 500,
        }
    ]
}

export default config