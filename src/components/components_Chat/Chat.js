import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:3001');


const Chat = ({messages, isLoading, user, renderMessage, typingListener, onSubmit }) => {
  const [ message, setMessage ] = useState('');

  // Represents all your lifecycle methods rolled into one: componentWillMount, componentWillUnmount, componentDidUpdate
  useEffect(() => {
    typingListener && typeof typingListener === 'function' && typingListener();
    scrollToBottom();
  }, [message]);

  const scrollToBottom = () => {
    const chat = document.getElementById('end-of-chat');
    chat.scrollIntoView();
  };

  handleSendMessage = event => {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  };


  return (
    <>
      <div className='chat-box'>
        <div className='msg-page'>
          <MessageList
            isLoading={isLoading}
            messages={messages} 
            user={user}
            renderMessage={renderMessage}
          />
          <div className='chat-box-bottom'>
          { typingIndicator ? typingIndicator : '' }
          <div id='end-of-chat'></div>
        </div>
        </div>
        <div className='msg-footer'>
          <form
            className='message-form'
            onSubmit={message}>
            <div className='input-group'>
              <input
                type='text'
                className='form-control message-input'
                placeholder='Type something'
                value={message}
                onChange={event => setMessage(event.target.value)}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}



//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.message !== this.state.message && this.props.typingListener) {
//       this.props.typingListener();
//     }
//     this.scrollToBottom();
//   }

//   handleSendMessage = event => {
//     event.preventDefault();
//     const {message} = this.state;
//     this.props.onSubmit(message);
//     this.setState({message: ''});
//   };

//   scrollToBottom = () => {
//     const chat = document.getElementById('end-of-chat');
//     chat.scrollIntoView();
//   };

//   render() {
//     let {messages, isLoading, user, renderMessage} = this.props;
//     let {message} = this.state;

//     return (
//             <div className='chat-box'>
//               <div className='msg-page'>
//                 <MessageList
//                   isLoading={isLoading}
//                   messages={messages} 
//                   user={user}
//                   renderMessage={renderMessage}
//                 />
//                 <div className='chat-box-bottom'>
//                   { this.props.typingIndicator?this.props.typingIndicator:'' }
//                   <div id='end-of-chat'></div>
//                 </div>
//               </div>
//               <div className='msg-footer'>
//                 <form
//                   className='message-form'
//                   onSubmit={this.handleSendMessage}>
//                   <div className='input-group'>
//                     <input
//                       type='text'
//                       className='form-control message-input'
//                       placeholder='Type something'
//                       value={message}
//                       onChange={event => this.setState({ message: event.target.value})}
//                       required
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//     );
//   }
// }

 Chat.propTypes = {
    messages: PropTypes.array,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    user: PropTypes.object,
    renderMessage: PropTypes.func,
    typingListener: PropTypes.func,
    typingIndicator: PropTypes.element,
 };

Chat.defaultProps = {
  messages: [],
  user: {
    "uid": "user1"
  },
  isLoading: false,
  onSubmit: (message) => console.log(message)
};

export default Chat;