class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend.")
        this.addMessageToState(message);
    }

    defaultMessage = () => {
        const message = this.createChatBotMessage("Sorry I don't know what that means yet.")
        this.addMessageToState(message);
    }

    todosHandler = () => {
        const message = this.createChatBotMessage("Sure. Here's your todos.", {
            widget: "todos"
        })
        this.setChatbotMessage(message);
    }

    setChatbotMessage = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message],
        }));
    };

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
  }
  
export default ActionProvider;