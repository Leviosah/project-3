import React from 'react';
import ChatBox from "./components_Chat/";
import  './components_Chat/style.css';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
    };
  }

  componentDidMount() {
    const messages = [
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://icon-library.net/icon/iron-man-icon-21.html",
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "3",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
    ];

    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });

  }

  render() {
    return (
      <div className='container' style={{maxWidth: '800px', paddingTop: '100px'}}>
        <div className='chat-header'>
          <h5>Messages</h5>
        </div>
        <ChatBox messages={this.state.messages} />
      </div>
    )
  }
}

export default App;